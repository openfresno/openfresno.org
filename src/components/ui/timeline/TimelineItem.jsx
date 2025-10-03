'use client';
import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../ui";

export class SimpleButton {
    constructor(text = "", href = "") {
        this.text = text;
        this.href = href;
    }
}

export function TimelineItem({
    number = 0,
    heading,
    buttons = [],
    updateTimelineNumbers,
    children = (<></>)
}) {
    const refContainer = useRef();
    useEffect(() => {
        if (refContainer.current) {
            updateTimelineNumbers(number, refContainer.current.getBoundingClientRect());
        }
    }, []);
    return (
        <div className="timeline-item">
            <div className="timeline-number" ref={refContainer}>{number}</div>
            <div className="timeline-item-content">
                <h2 className="heading-small">{heading}</h2>
                <p>
                    {children}
                </p>
                {
                    buttons.length == 0 ? (
                        <Button
                            className="btn btn--grow mx-auto mt-2 lg:mx-0" href={buttons[0].href}
                        >
                            {buttons[0].text}
                        </Button>
                    ) : buttons.length >= 1 ? (
                        <div className="mt-2 flex flex-wrap justify-center gap-4 lg:justify-start">
                            {
                                buttons.map((button, index) => {
                                    console.log(button, index);
                                    return (<Button className="btn btn--grow" href={button.href} key={index}>
                                        {button.text}
                                    </Button>)
                                })
                            }
                        </div>

                    ) : ""
                }
            </div>
        </div>
    )
}