import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET(req: Request) {
    // const { username } = req.json();

    try {
        const response = await fetch(`https://api.github.com/users/${"vannsoklay"}/repos`);
        if (!response.ok) {
            return NextResponse.json({ status: 200, data: [] });
        }
        const data = await response.json();
        return NextResponse.json({ status: 200, data: data });
    } catch (error) {
        return NextResponse.json({ status: 200, message: [] });
    }
}