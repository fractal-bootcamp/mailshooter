import { expect, test, describe, it } from "vitest";
import request from "supertest";

import { beforeEach } from "vitest";
import { seedTestDatabase } from "./seed";
import app from "../server";
import { z } from "zod";

import { BlastSchema, MailingListSchema as MailingListSchemaStrictCuid, MessageSchema, type Blast, type MailingList } from "../prisma/generated/zod/index";
import { blastData, listData, messageData } from "./seedData";

const MailingListSchema = MailingListSchemaStrictCuid.extend({
    id: z.string(),
});

// describe('database tests', () => {

// })

beforeEach(async () => {
    await seedTestDatabase();
});

// TODO: create a test database

describe("mailing list tests", () => {
    it("should ping the server and get a hello world", async () => {
        const res = await request(app).get("/");
        expect(res.text).toBe("Hello World!");
    });

    it("should get a list of all mailing lists", async () => {
        const res = await request(app).get("/dashboard/list/all");
        const body = await res.body;
        const status = await res.status;

        // expect status to be 200
        // expect body to be an array of MailingList objects
        // expect body to have at least one element
        expect(status).toBe(200);
        expect(Array.isArray(body)).toBe(true);
        console.log('body gang', body)
        console.log('Trying to parse the first element of body:', MailingListSchema.safeParse(body[0]));

        const hey = MailingListSchema.safeParse(body[0])

        console.log(hey.error?.format())

        body.forEach((mailingList: MailingList) => {
            expect(MailingListSchema.safeParse(mailingList).success).toBe(true);
        });
        expect(body.length).toBeGreaterThan(0);
    });

    it("should get a mailing list by id", async () => {
        const id = "001a";
        const res = await request(app).get(`/dashboard/list/${id}`);
        const body = res.body;
        console.log("ayo bruh", process.env, body);
        const status = res.status;

        expect(status).toBe(200);
        expect(() => MailingListSchema.safeParse(body).success); // does a zod check
        expect(body.id).toBe(id);
    });

    it("should update a mailing list with additions of personIds, deletions of personIds, potential name change", async () => {
        // endpoint 001b begins with person 001a in it.
        // if i PUT that endpoint with addPersonIds = ['001b'] and delPersonIds = ['001a']
        // and then i hit that same endpoint it should return a mailinglist with person 001b in it

        const id = "001b";
        const addPersonIds = ["001b"];
        const delPersonIds = ["001a"];

        const updateData = {
            added: addPersonIds,
            deleted: delPersonIds,
            name: "VIP People",
        };
        await request(app).get(`/dashboard/list/${id}`);

        await request(app).put(`/dashboard/list/${id}`).send(updateData);

        const getRes = await request(app).get(`/dashboard/list/${id}`);

        const body = getRes.body;
        const status = getRes.status;

        expect(status).toBe(200);
        expect(body.recipients[0].personId).toBe(updateData.added[0]);
        expect(body.name).toBe(updateData.name);
    });

    // out of scope for now
    // it('should delete a mailing list by id', async () => {

    // })

    // out of scope
    // it ('should create a mailing list', async () => {

    // })
});

describe.skip("email blast tests", () => {
    it("should pull all email blasts", async () => {

        // hit endpoint /dashboard/blast/all
        // expect status to be 200
        // expect body to be an array of EmailBlast objects

        const res = await request(app).get("/dashboard/blast/all");
        const body = await res.body;
        const status = await res.status;

        expect(status).toBe(200);
        body.forEach((blast: Blast) => {
            expect(BlastSchema.safeParse(blast).success).toBe(true);
        });
        expect(body.length).toBeGreaterThan(0);

    })

    it("should pull an email blast by ID", async () => {
        // hit endpoint /dashboard/blast/:id
        // expect status to be 200
        // hit with id = '001a'
        // expect body.id to be id 
        // expect body.blastName to be initial blast name
        const expectBlast = blastData.blast1;

        const res = await request(app).get(`/dashboard/blast/${expectBlast.id}`);
        const body = res.body;
        const status = res.status;
        expect(status).toBe(200);
        expect(BlastSchema.safeParse(body).success).toBe(true);
        expect(body.id).toBe(expectBlast.id);
        expect(body.name).toBe(expectBlast.name);
        expect(body.messagesSent).toBe([messageData.message1])
        expect(body.authorId).toBe(expectBlast.authorId)

    })

    it("should create a new email blast", async () => {
        // should hit endpoint /dashboard/blast/create
        // it should create a new email blast 
        // should supply content  
        // and should supply email lists
        // should supply name

        // I want to catch the new blast id 
        // then hit the GET endpoint with the new blast id

        // expect status to be 200
        // expect body to be of type Blast
        // expect the body.messagesSent to be an array of messages with content matching the content in sendData.content
        // expect the body.lists to be an array matching the lists in sendData.lists

        const sendData = {
            content: "This is the first blast of the season gang",
            lists: [listData.mailingList1.id, listData.mailingList2.id],
            name: "First of the Season"
        }

        const res = await request(app)
            .post("/dashboard/blast/create")
            .send(sendData);

        const body = res.body;
        const status = res.status;

        expect(status).toBe(200);
        expect(BlastSchema.safeParse(body).success).toBe(true);

        const MessagesArraySchema = z.array(MessageSchema);
        expect(MessagesArraySchema.safeParse(body.messagesSent).success).toBe(true);

        const listsArraySchema = z.array(MailingListSchema);
        expect(listsArraySchema.safeParse(body.lists).success).toBe(true);



    })
})
