import { describe, it, expect, vi } from 'vitest';
import express from 'express';
import request from 'supertest';

const app = express();

app.get('/health', (_req, res) => {
    res.status(200).json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
    });
});

describe('Health Endpoint', () => {
    it('GET /health returns 200 with status ok', async () => {
        const res = await request(app).get('/health');
        expect(res.status).toBe(200);
        expect(res.body.status).toBe('ok');
        expect(res.body).toHaveProperty('timestamp');
        expect(res.body).toHaveProperty('uptime');
    });

    it('GET /health returns valid timestamp', async () => {
        const res = await request(app).get('/health');
        const date = new Date(res.body.timestamp);
        expect(date.getTime()).not.toBeNaN();
    });

    it('GET /unknown returns 404', async () => {
        const res = await request(app).get('/unknown-route');
        expect(res.status).toBe(404);
    });
});
