import { describe, it, expect } from 'vitest';
import express from 'express';
import request from 'supertest';

const app = express();
app.use(express.json());

app.get('/me', (req, res) => {
    if (!req.session || !req.session.userId) {
        return res.status(401).json({ msg: 'Mohon Login ke Akun Anda!' });
    }
    res.status(200).json({ id: 1, username: 'test' });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ msg: 'Username and password are required' });
    }
    res.status(200).json({ msg: 'Login Berhasil' });
});

describe('Auth Endpoints', () => {
    describe('GET /me', () => {
        it('returns 401 when not authenticated', async () => {
            const res = await request(app).get('/me');
            expect(res.status).toBe(401);
        });
    });

    describe('POST /login', () => {
        it('returns 400 when credentials are missing', async () => {
            const res = await request(app).post('/login').send({});
            expect(res.status).toBe(400);
        });

        it('returns 400 when password is missing', async () => {
            const res = await request(app).post('/login').send({ username: 'admin' });
            expect(res.status).toBe(400);
        });

        it('accepts valid credentials format', async () => {
            const res = await request(app)
                .post('/login')
                .send({ username: 'admin', password: 'password123' });
            expect(res.status).toBe(200);
            expect(res.body.msg).toBe('Login Berhasil');
        });
    });
});
