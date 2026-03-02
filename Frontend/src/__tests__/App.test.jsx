import { describe, it, expect } from 'vitest';

describe('Frontend Smoke Tests', () => {
    it('React is importable', async () => {
        const React = await import('react');
        expect(React).toBeDefined();
        expect(React.createElement).toBeInstanceOf(Function);
    });

    it('ReactDOM is importable', async () => {
        const ReactDOM = await import('react-dom');
        expect(ReactDOM).toBeDefined();
    });

    it('Redux store can be created', async () => {
        const { configureStore } = await import('@reduxjs/toolkit');
        const store = configureStore({ reducer: { test: (s = {}) => s } });
        expect(store.getState()).toHaveProperty('test');
    });

    it('React Router is importable', async () => {
        const { BrowserRouter } = await import('react-router-dom');
        expect(BrowserRouter).toBeDefined();
    });
});
