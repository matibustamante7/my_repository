import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Contact() {

    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_brbvcg2', 'template_1rin4gp', form.current, '6Fd2UbpWn9eGkf7da')
            .then((result) => {
                console.log(result.text);
                // Clear the input fields after successful email send
                setName('');
                setEmail('');
                setMessage('');
                alert('Message sent successfully!');
            })
            .catch((error) => {
                console.log(error.text);
                alert('Failed to send message. Please try again.');
            });
    }

    return (
        <div className='sm:h-screen flex flex-col gap-2 items-center justify-evenly xxs:h-max mt-12'>
            <h2 className=' text-blue-700 text-3xl'>Contact me!</h2>

            <div className='flex flex-row gap-6 justify-center xxs:flex-col xxs:gap-0 lg:flex-row '>

                <div className='flex flex-col gap-4 p-10'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-2xl font-medium'>Get in touch</h3>
                        <span className='text-lg font-md'>Don't be shy, and leave me a message</span>
                    </div>
                    <div>
                        <ul className='text-md font-light flex flex-col gap-2'>
                            <li className='flex flex-row gap-1 items-center'><FontAwesomeIcon icon={faEnvelope} /> matias.dev7@gmail.com</li>
                            <li className='flex flex-row gap-1 items-center'><FontAwesomeIcon icon={faLocationDot} /> Cordoba, Argentina</li>
                            <li className='flex flex-row gap-1 items-center '><FontAwesomeIcon icon={faGithub} />
                                <a href='https://github.com/matibustamante7'
                                    className='hover:text-blue-700'>  matibustamante7 </a></li>
                            <li className='flex flex-row gap-1 items-center'><FontAwesomeIcon icon={faLinkedin} />
                                <a href='https://www.linkedin.com/in/matias-bustamante-90ba9b274/'
                                    className='hover:text-blue-700' > Matias Bustamante</a> </li>
                        </ul>
                    </div>
                </div>
                <form id='form' className='flex flex-col gap-4 border-red-100 p-10' ref={form} onSubmit={sendEmail}>
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        name='name'
                        id='name'
                        placeholder='Name'
                        className='rounded-md bg-zinc-100 text-black h-10 resize-none focus:outline-none border-2 focus:border-blue-700 p-2'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        name='email'
                        id='email'
                        placeholder='Email'
                        className='rounded-md bg-zinc-100 text-black h-10 resize-none focus:outline-none border-2 focus:border-blue-700 p-2'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="message">Message: </label>
                    <textarea
                        type="textarea"
                        name='message'
                        id='message'
                        placeholder='Message'
                        className='rounded-md bg-zinc-100 text-black h-40 resize-none focus:outline-none border-2 focus:border-blue-700 p-2'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <input type="submit" value='Send'
                        className='px-2 py-1 bg-blue-800 hover:bg-blue-600 rounded-xl h-10'
                    />
                </form>

            </div>
        </div>
        // <form ref={form} onSubmit={sendEmail}>
        //     <label>Name</label>
        //     <input type="text" name="user" />
        //     <label>Email</label>
        //     <input type="email" name="user" />
        //     <label>Message</label>
        //     <textarea name="message" />
        //     <input type="submit" value="Send" />
        // </form>
    )
}
