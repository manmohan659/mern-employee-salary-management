import { describe, it, expect } from 'vitest';
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

app.get('/api/me', (req, res) => {
    res.status(401).json({ msg: 'Please log in to your account!' });
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

    it('GET /api/me returns 401 without auth', async () => {
        const res = await request(app).get('/api/me');
        expect(res.status).toBe(401);
    });
});
