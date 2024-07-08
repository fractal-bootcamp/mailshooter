import { expect, test, describe, it } from "vitest";
import { sum } from "./server";
import request from 'supertest'
import type { MailingList } from "@prisma/client";

// describe('database tests', () => {

// })


const SERVER_URL = 'http://localhost:3000'

describe('mailing list tests', () => {
    it('should ping the server and get a hello world', async () => {
        const res = await request(SERVER_URL).get('/')
        expect(res.text).toBe('Hello World!')
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




})

it('should delete a list by id', async () => {
    const res = await request(SERVER_URL).delete('/list/:id')
    expect(res.body).toBe(200)
})
