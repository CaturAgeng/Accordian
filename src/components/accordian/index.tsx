'use client';

import React, { useState } from "react";
import data from "@/components/accordian/data";
import "@/components/accordian/styles.css";

interface AccordionData {
    id: string;
    question: string;
    answer: string;
}

const Accordion: React.FC = () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [isSingleOpenMode, setIsSingleOpenMode] = useState<boolean>(true);

    const handleSelectionToggle = (id: string) => {
        if (isSingleOpenMode) {
            setSelectedItems((prevSelectedItems) =>
                prevSelectedItems.includes(id) ? [] : [id]
            );
        } else {
            setSelectedItems((prevSelectedItems) =>
                prevSelectedItems.includes(id)
                    ? prevSelectedItems.filter((item) => item !== id)
                    : [...prevSelectedItems, id]
            );
        }
    };

    const toggleMode = () => {
        setIsSingleOpenMode(!isSingleOpenMode);
        setSelectedItems([]); // Reset selection when mode changes
    };

    return (
        <div className="wrapper">
            <button onClick={toggleMode}>
                Switch to {isSingleOpenMode ? "Multiple Open" : "Single Open"} Mode
            </button>
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem: AccordionData) => (
                        <div className="item" key={dataItem.id}>
                            <div className="title" onClick={() => handleSelectionToggle(dataItem.id)}>
                                <h3>{dataItem.question}</h3>
                                <span>{selectedItems.includes(dataItem.id) ? '-' : '+'}</span>
                            </div>
                            {selectedItems.includes(dataItem.id) && (
                                <div className="content">{dataItem.answer}</div>
                            )}
                        </div>
                    ))
                ) : (
                    <div>No data found!</div>
                )}
            </div>
        </div>
    );
}

export default Accordion;
