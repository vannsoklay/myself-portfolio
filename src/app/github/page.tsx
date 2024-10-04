'use client'

import { motion } from 'framer-motion'
import { Avatar, Button, Card, Chip, Image, Spinner } from '@nextui-org/react'
import { useEffect, useState } from 'react';

interface Repo {
    id: number
    name: string
    description: string
    stargazers_count: number
    html_url: string
}

export default function Github() {
    const [repos, setRepos] = useState<Repo[]>([])
    const [username, setUsername] = useState('vannsoklay');
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true); // Loading state
    const [hasMore, setHasMore] = useState(true)

    const fetchRepos = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://api.github.com/users/${username}/repos?page=${page}&per_page=10&sort=updated`);
            const data = await res.json();
            setRepos(prevRepos => [...prevRepos, ...data])
            setHasMore(data.length === 10)
        } catch (err) {
            setRepos([]);
        }
        setLoading(false);
    };

    const clearRepos = () => {
        setRepos([]);
        setUsername('');
    };
    useEffect(() => {
        if (username) {
            fetchRepos()
        }
    }, [page])

    const loadMore = () => {
        setPage(prevPage => prevPage + 1)
    }

    return (
        <div className="min-h-screen w-full relative pb-10">
            {/* Background image with blur */}
            <div className="fixed inset-0 z-0 max-w-full">
                <Image
                    src="https://img.freepik.com/free-photo/top-view-arrangement-with-construction-items_23-2148269416.jpg?t=st=1727940811~exp=1727944411~hmac=d03645eba2d031c510364ab2a7ef896e0d43ae564e399e2d83dbef6684bb5ca2&w=900"
                    alt="background"
                    className="object-cover filter blur-sm w-screen h-screen"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 space-y-8 pb-16 pt-8 lg:pt-12">
                <motion.h1
                    className="lg:text-3xl text-xl font-bold text-primary mb-8 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    GitHub Repositories
                </motion.h1>

                {/* Repos */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {repos.length > 0 && (
                        repos.map((repo: any) => (
                            <motion.div
                                key={repo.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <Card className='bg-transparent border-0 p-6 bg-white' radius="lg" shadow='none'>
                                    <a href={repo.html_url} className='hover:underline text-xl' target="_blank" rel="noopener noreferrer">
                                        <strong>{repo.name}</strong>
                                    </a>
                                    <p>⭐ Stars: {repo.stargazers_count} | 🍴 Forks: {repo.forks_count}</p>
                                    <p>📅 Updated at: {new Date(repo.updated_at).toLocaleDateString()}</p>
                                </Card>
                            </motion.div>
                        ))
                    )}
                </div>
                {loading && <div className='text-center'><Spinner label="Loading..." color="primary" /></div>}
                {!loading && hasMore && (
                    <div className="text-center mt-4">
                        <Button onPress={loadMore} variant="solid" color="primary">Load More</Button>
                    </div>
                )}
            </div>
        </div>
    )
}