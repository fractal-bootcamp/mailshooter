import { expect, test, describe, it } from "vitest";
import request from 'supertest'
import type { MailingList } from "@prisma/client";
import { stringSchema, mailingListSchema } from "./schemas.zod"
import { beforeEach } from "vitest";
import { seedTestDatabase } from "./seed";

// describe('database tests', () => {

// })

beforeEach(async () => {
    await seedTestDatabase()
})

// TODO: create a test database


const SERVER_URL = 'http://localhost:3000'

describe('mailing list tests', () => {
    it('should ping the server and get a hello world', async () => {
        const res = await request(SERVER_URL).get('/')
        expect(res.text).toBe('Hello World!')
        expect(() => stringSchema.safeParse(res.body).success)
    })

    it('should get a list of all mailing lists', async () => {
        const res = await request(SERVER_URL).get('/list/all')
        const body = res.body
        const status = res.status

        // expect status to be 200
        // expect body to be an array of MailingList objects
        // expect body to have at least one element
        expect(status).toBe(200)
        expect(() => mailingListSchema.safeParse(body[0]).success)
        expect(body.length).toBeGreaterThan(0)
    })

    it('should get a mailing list by id', async () => {
        const id = "001a"
        const res = await request(SERVER_URL).get(`/list/${id}`)
        const body = res.body
        const status = res.status

        expect(status).toBe(200)
        expect(() => mailingListSchema.safeParse(body).success) // does a zod check
        expect(body.length).toBeGreaterThan(0)
    })

    it('should update a mailing list with additions of personIds, deletions of personIds, potential name change', async () => {
        // endpoint 001b begins with person 001a in it. 
        // if i PUT that endpoint with addPersonIds = ['001b'] and delPersonIds = ['001a']
        // and then i hit that same endpoint it should return a mailinglist with person 001b in it


        const id = "001b"
        const addPersonIds = ['001b']
        const delPersonIds = ['001a']

        const updateData = {
            added: addPersonIds,
            deleted: delPersonIds,
            name: 'VIP Customers'
        }

        const putRes = await request(SERVER_URL)
            .put(`/list/${id}`)
            .send(updateData)

        const getRes = await request(SERVER_URL).get(`/list/${id}`)

        const body = getRes.body
        const status = getRes.status

        expect(status).toBe(200)
        expect(body.personsInMailingLists[0].personId).toBe('001b')
        expect(body.name).toBe('VIP Customers')

    })

    // out of scope for now
    // it('should delete a mailing list by id', async () => {

    // })

    // out of scope
    // it ('should create a mailing list', async () => {

    // })





})


