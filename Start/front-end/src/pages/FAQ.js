import React from "react";
import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const FAQ=()=>{
	return(
		<>
		<NavBar/>
<div className="pages">

        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Question 1?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="faq-answer">
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Question 2?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="faq-answer">
                    <p>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Question 3?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="faq-answer">
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Question 4?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="faq-answer">
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Question 5?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="faq-answer">
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading >
                    <AccordionItemButton>
                        Question 6?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="faq-answer">
                    <p>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
 
</div>
<Footer/>
</>
		)
}
export default FAQ;