'use client';
import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../ui";

export class SimpleButton {
    constructor(text = "", href = "") {
        this.text = text;
        this.href = href;
    }
}

/**
 * A responsive component for displaying a single volunteer opportunity.
 *
 * This component renders single slice of a vertical timeline that transitions
 * from a single-column layout on mobile to an alternating two-column layout on
 * desktop. The styling and layout logic are fully described in the associated 
 * CSS file's comments.
 *
 * @component
 * @param {object} props
 * @param {integer} [props.number] The number to display
 * @param {string} [props.heading] The heading text to display
 * @param {SimpleButton[]} [props.button] A list of buttons to display, with 
 *        adaptive rendering for single buttons and pairs of buttons
 * @param {(integer, DOMRect)=>null} [props.updateTimelineNumbers] A callback function from the
 *        parent to get the position of the timeline number for animation purposes
 * @param {React.JSX.Element} [props.children] The text to display within the timeline column.
 *        Inserted using <TimelineItem ...props> ...children</TimelineItem>
 */
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