'use client';
import TImelineCard from '@/components/TImelineCard';
import React, { useEffect, useState } from 'react';

import { Form, Label, SearchField } from "@heroui/react";

const TimelinePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("ButtonClickData")) || [];
        setData(storedData);
    }, []);

    // console.log("Timeline Data:", data);


    const handleSearch = (e)=>{
        e.preventDefault();
        const searchValue = e.target.value.toLowerCase();
        const storedData = JSON.parse(localStorage.getItem("ButtonClickData")) || [];
        const filteredData = storedData.filter(item =>item.type.toLowerCase().includes(searchValue));
        setData(filteredData);
    }


    return (
        <div className="min-h-[60vh]">

            <div>
                <h1 className="text-2xl font-bold mb-4">Timeline</h1>

                <Form className="mb-4 " onChange={handleSearch}>
                    <SearchField name="search">
                    
                    <SearchField.Group className="w-full flex items-center gap-2 p-3 border-1 border-gray-300 rounded-lg">
                        <SearchField.SearchIcon />
                        <SearchField.Input className="w-[400px]" placeholder="Filter timeline..." />
                        <SearchField.ClearButton />
                    </SearchField.Group>
                </SearchField>
                </Form>

                <div>
                    {
                        data.length === 0 ? <p>No interactions yet.</p> :
                            data.map((data, index) => <TImelineCard key={index} data={data} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default TimelinePage;