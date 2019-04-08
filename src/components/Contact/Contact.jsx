import React from 'react';
import './Contact.css'
import ContactCard from "./ContactCard/ContactCard";
import StackGrid, {transitions, easings} from "react-stack-grid"

export default class Contact extends React.PureComponent {
    render() {
        return (
            <main className="Contacts">
                <h1>
                    Контакты (Временное место для обучения)
                </h1>
                <div className="cats">
                    <StackGrid monitorImagesLoaded
                               columnWidth={200}
                               duration={600}
                               gutterWidth={15}
                               gutterHeight={15}
                               easing={easings.cubicOut}
                               appearDelay={60}
                               appear={transitions.appear}
                               appeared={transitions.appeared}
                               enter={transitions.enter}
                               entered={transitions.entered}
                               leaved={transitions.leaved}>
                    <ContactCard
                    name = "Mr. Whiskerson"
                    imgUrl = "http://placekitten.com/300/200"
                    phone = "(212) 555-1234"
                    email = "mr.whiskaz@catnap.meow"
                    />
                    <ContactCard
                        name = "Fluffykins"
                        imgUrl = "http://placekitten.com/400/200"
                        phone = "(212) 555-2345"
                        email = "fluff@me.com"
                    />
                    <ContactCard
                        name = "Destroyer"
                        imgUrl = "http://placekitten.com/400/300"
                        phone = "(212) 555-3456"
                        email = "ofworlds@yahoo.com"
                    />
                    <ContactCard
                        name = "Felix"
                        imgUrl = "http://placekitten.com/200/100"
                        phone = "(212) 555-4567"
                        email = "thecat@hotmail.com"
                    />
                    </StackGrid>
                    {/*<div className="contact__card">*/}
                        {/*<img align="center" src="http://placekitten.com/300/200"/>*/}
                        {/*<h3><font color="#3AC1EF">Mr. Whiskerson</font></h3>*/}
                        {/*<p>Phone: (212) 555-1234</p>*/}
                        {/*<p>Email: mr.whiskaz@catnap.meow</p>*/}
                    {/*</div>*/}

                    {/*<div className="contact__card">*/}
                        {/*<img align="center" src="http://placekitten.com/400/200"/>*/}
                        {/*<h3><font color="#3AC1EF">Fluffykins</font></h3>*/}
                        {/*<p>Phone: (212) 555-2345</p>*/}
                        {/*<p>Email: fluff@me.com</p>*/}
                    {/*</div>*/}

                    {/*<div className="contact__card">*/}
                        {/*<img align="center" src="http://placekitten.com/400/300"/>*/}
                        {/*<h3><font color="#3AC1EF">Destroyer</font></h3>*/}
                        {/*<p>Phone: (212) 555-3456</p>*/}
                        {/*<p>Email: ofworlds@yahoo.com</p>*/}
                    {/*</div>*/}

                    {/*<div className="contact__card">*/}
                        {/*<img align="center" src="http://placekitten.com/200/100"/>*/}
                        {/*<h3><font color="#3AC1EF">Felix</font></h3>*/}
                        {/*<p>Phone: (212) 555-4567</p>*/}
                        {/*<p>Email: thecat@hotmail.com</p>*/}
                    {/*</div>*/}

                </div>

            </main>
        );
    }
}
