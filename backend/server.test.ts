import { expect, test, describe, it } from "vitest";
import { sum } from "./server";
import request from 'supertest'
import type { MailingList } from "@prisma/client";
import { stringSchema, mailingListSchema } from "./prisma/schemas.zod"

// describe('database tests', () => {

// })


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
        expect(body).toBeInstanceOf(Array<MailingList>)
        expect(body.length).toBeGreaterThan(0)
    })

    it('should get a mailing list by id', async () => {
        const res = await request(SERVER_URL).get('/list/:id')
        const body = res.body
        const status = res.status

        expect(status).toBe(200)
        expect(() => mailingListSchema.safeParse(body).success) // does a zod check
        expect(body.length).toBeGreaterThan(0)

    })
})


