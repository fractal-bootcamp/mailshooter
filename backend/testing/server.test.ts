import { expect, test, describe, it } from "vitest";
import request from "supertest";

import { BlastSchema, MailingListSchema } from "../prisma/generated/zod/index";

import { beforeEach } from "vitest";
import { seedTestDatabase } from "./seed";
import app from "../server";

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
        expect(() => MailingListSchema.safeParse(body[0]).success);
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

describe("email blast tests", () => {
    it("should pull all email blasts", async () => {

        // hit endpoint /dashboard/blast/all
        // expect status to be 200
        // expect body to be an array of EmailBlast objects

        const res = await request(app).get("/dashboard/blast/all");
        const body = await res.body;
        const status = await res.status;

        expect(status).toBe(200);
        expect(() => BlastSchema.safeParse(body[0]).success);




    })

    it("should pull an email blast by ID", async () => {

    })

    it("should create a new email blast", async () => {

    })
})
