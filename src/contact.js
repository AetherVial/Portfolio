import React from 'react';

const today = new Date();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const Contact = () => (
    <div className="home">
        <nav>
            <svg xmlns="http://www.w3.org/2000/svg" name="PersonWaving" className="linkButtonIcon-Mlm5d6" aria-hidden="false" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path fill="currentColor" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)" /><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z" /></g></svg>
            <h2>Contact</h2>
        </nav>
        <div>
            <div className='beginning'>
                Here, you'll find my contact information, along with links to my online profiles and resume.
            </div>
            <div className='chat'>
                <div className="icon-container"><div className='chatIcon'
                    style={{backgroundColor: 'rgb(0, 119, 181)'}}>
                    <svg id="Linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="#fff"><title>Artboard 14</title><path id="plain" d="M116,3H12a8.91,8.91,0,0,0-9,8.8V116.22A8.91,8.91,0,0,0,12,125H116a8.93,8.93,0,0,0,9-8.81V11.77A8.93,8.93,0,0,0,116,3ZM39.17,107H21.06V48.73H39.17Zm-9-66.21a10.5,10.5,0,1,1,10.49-10.5A10.5,10.5,0,0,1,30.12,40.77ZM107,107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87,7.36-10.87,15V107H50.53V48.73H67.89v8h.24c2.42-4.58,8.32-9.41,17.13-9.41C103.6,47.28,107,59.35,107,75Z" /></svg>
                    </div></div>
                <div>
                    <div className='author'>LinkedIn  <p>Today at {time}</p></div>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/stan1000">Click Me</a>
                    </div>
                </div>
            </div>
            <div className='chat'>
                <div className="icon-container"><div className='chatIcon'
                    style={{ backgroundColor: '#000' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#fff"><path d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z" /><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0" /></g></svg>
                </div> </div>
                <div>
                    <div className='author'>Github  <p>Today at {time}</p></div>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/aethervial">Click Me</a>
                    </div>
                </div>
            </div>
            <div className='chat'>
                <div className="icon-container"><div className='chatIcon'
                    style={{ backgroundColor: '#000' }}>
                    <svg height="56.7px" id="Layer_1" version="1.1" viewBox="0 0 56.7 56.7" width="56.7px" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g><path d="M38.8794,24.7448c2.0216,0.3824,3.4481,1.2355,4.2793,2.5609c0.8307,1.3258,1.2467,3.4149,1.2467,6.2674   c0,5.6608-1.7016,10.2939-5.1049,13.8993c-3.4032,3.605-7.7555,5.4076-13.0569,5.4076c-2.0891,0-4.1164-0.3763-6.082-1.1288   c-1.9661-0.7526-3.656-1.8027-5.0711-3.1505c-1.6174-1.4821-2.8305-3.049-3.6391-4.7c-0.8087-1.6511-1.213-3.341-1.213-5.0712   c0-1.9318,0.4156-3.4252,1.2466-4.4814c0.8307-1.0558,2.1448-1.7742,3.9424-2.1565c-0.3369-0.7863-0.5845-1.449-0.7413-1.9881   c-0.1573-0.5391-0.2359-0.9547-0.2359-1.2466c0-1.0109,0.5335-2.0438,1.6005-3.1c1.0666-1.0558,2.0723-1.5837,3.0157-1.5837   c0.4044,0,0.8307,0.073,1.2804,0.2191c0.4493,0.1465,0.9655,0.3875,1.55,0.7244c-1.7302-4.8971-2.9877-8.6765-3.7739-11.3385   c-0.7867-2.6619-1.1793-4.4983-1.1793-5.5091c0-1.3927,0.3589-2.4986,1.0782-3.319C18.7408,4.23,19.718,3.82,20.9534,3.82   c2.1112,0,4.7847,4.7174,8.0195,14.152c0.5612,1.6174,0.9884,2.8641,1.2805,3.7402c0.2471-0.6959,0.5948-1.6848,1.0445-2.9652   c3.2348-9.3448,6.0198-14.0173,8.3565-14.0173c1.1456,0,2.0606,0.3875,2.7461,1.1625c0.6851,0.775,1.0277,1.8144,1.0277,3.1169   c0,0.9888-0.3763,2.7966-1.1289,5.4249C41.5465,17.0623,40.4069,20.4992,38.8794,24.7448z M14.7535,38.4925   c0.3145,0.3823,0.7526,0.9435,1.3141,1.6848c1.4826,2.0442,2.8524,3.0663,4.1109,3.0663c0.4263,0,0.8086-0.1348,1.1456-0.4044   c0.3369-0.2695,0.5054-0.5503,0.5054-0.8424c0-0.3369-0.2247-0.8981-0.6739-1.6848c-0.4498-0.7862-1.067-1.6731-1.8533-2.6619   c-0.8985-1.1456-1.6459-1.9824-2.2407-2.5104c-0.5953-0.5274-1.0731-0.7918-1.432-0.7918c-0.7867,0-1.5112,0.4211-2.1734,1.2635   c-0.6627,0.8424-0.994,1.8364-0.994,2.982c0,0.9215,0.2302,1.9492,0.6908,3.0831c0.4601,1.1344,1.1288,2.2745,2.0049,3.4201   c1.3253,1.7747,2.9703,3.1388,4.9364,4.0935c1.9655,0.9557,4.1389,1.432,6.52,1.432c4.3804,0,8.0476-1.6341,11.0015-4.9022   c2.9535-3.2685,4.431-7.3624,4.431-12.282c0-1.5046-0.1128-2.7007-0.337-3.5885c-0.2247-0.8873-0.5953-1.5331-1.112-1.9375   c-0.9214-0.7633-2.7124-1.4489-5.3744-2.0554c-2.6619-0.6065-5.4418-0.9098-8.3396-0.9098c-0.8086,0-1.3815,0.1348-1.7184,0.4043   c-0.337,0.2696-0.5055,0.7301-0.5055,1.3815c0,1.528,0.8537,2.6339,2.5609,3.319c1.7068,0.6857,4.4698,1.0277,8.289,1.0277h1.3816   c0.3145,0,0.5672,0.118,0.7581,0.3538c0.1904,0.2359,0.3201,0.5897,0.3875,1.0615c-0.3824,0.3594-1.1682,0.7698-2.3587,1.2299   c-1.191,0.4604-2.1008,0.9153-2.7293,1.3646c-1.3479,0.9888-2.4317,2.1622-3.2516,3.5211   c-0.8204,1.3596-1.2299,2.6451-1.2299,3.8581c0,0.7414,0.1736,1.6342,0.5223,2.6788c0.3482,1.0446,0.5223,1.6904,0.5223,1.9375   v0.2359l-0.0674,0.3032c-0.9888-0.0674-1.769-0.6453-2.3418-1.7353c-0.5729-1.0895-0.8592-2.544-0.8592-4.3636v-0.3032   c-0.1802,0.1573-0.3539,0.2696-0.5223,0.337c-0.1685,0.0674-0.3539,0.1011-0.556,0.1011c-0.2022,0-0.3932-0.0169-0.5729-0.0506   c-0.1802-0.0336-0.3823-0.0842-0.6065-0.1516c0.0674,0.2476,0.118,0.4886,0.1516,0.7245c0.0337,0.2359,0.0505,0.4211,0.0505,0.556   c0,0.8312-0.3257,1.5448-0.9771,2.1396c-0.6519,0.5953-1.4269,0.8929-2.325,0.8929c-1.4151,0-2.8528-0.6908-4.313-2.0723   c-1.4606-1.3815-2.1901-2.7344-2.1901-4.0603c0-0.2471,0.0281-0.4661,0.0842-0.6571   C14.5228,38.7906,14.6188,38.6273,14.7535,38.4925z M24.8621,39.3012c0.3818,0,0.7296-0.1736,1.0445-0.5223   c0.3145-0.3482,0.4717-0.7245,0.4717-1.1288c0-0.4264-0.3089-1.4204-0.9266-2.9821c-0.6182-1.5612-1.3872-3.0943-2.3081-4.5994   c-0.6739-1.1232-1.3366-1.9711-1.988-2.544c-0.6519-0.5728-1.2692-0.8592-1.8533-0.8592c-0.4717,0-0.994,0.2982-1.5669,0.893   c-0.5728,0.5953-0.8592,1.1512-0.8592,1.6679c0,0.5391,0.2808,1.3479,0.8424,2.4261c0.5612,1.0783,1.3141,2.2239,2.2576,3.4369   c0.9884,1.3258,1.9206,2.3586,2.7967,3.1C23.649,38.9306,24.345,39.3012,24.8621,39.3012z M28.1643,23.0264l-3.6391-10.513   c-0.9435-2.6732-1.6735-4.4192-2.1901-5.2396c-0.5172-0.8199-1.0783-1.2299-1.6849-1.2299c-0.4716,0-0.8541,0.1802-1.1456,0.5391   c-0.292,0.3594-0.438,0.8424-0.438,1.4489c0,1.0334,0.3927,2.8305,1.1794,5.3913c0.7862,2.5609,1.9655,5.9192,3.538,10.0749   c0.1348-0.2471,0.3252-0.4211,0.5728-0.5223c0.2471-0.101,0.5841-0.1516,1.0109-0.1516c0.1348,0,0.4044,0.0117,0.8087,0.0337   C26.5805,22.8803,27.2428,22.937,28.1643,23.0264z M31.9718,33.2361c-0.9659-0.0449-1.8817-0.146-2.7461-0.3032   c-0.8648-0.1568-1.6904-0.3818-2.4766-0.6739c0.3589,0.7193,0.6791,1.4377,0.9604,2.1565   c0.2807,0.7193,0.5106,1.4268,0.6908,2.1228c0.5391-0.6739,1.1063-1.2856,1.7016-1.8364   C30.6966,34.1515,31.32,33.6628,31.9718,33.2361z M36.4533,24.172c1.5046-4.0884,2.6788-7.4635,3.5212-10.1255   c0.8424-2.6619,1.2635-4.2961,1.2635-4.9026c0-0.6515-0.1404-1.1568-0.4211-1.5163c-0.2813-0.359-0.6688-0.5391-1.1625-0.5391   c-0.629,0-1.2693,0.5223-1.9206,1.5668c-0.6519,1.0446-1.3703,2.7242-2.1565,5.0375l-3.3696,9.7379L36.4533,24.172z" /></g></svg>
                    </div> </div>
                <div>
                    <div className='author'>AngelList  <p>Today at {time}</p></div>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://angel.co/stanton-huang">Click Me</a>
                    </div>
                </div>
            </div>
            <div className='chat'>
                <div className="icon-container"><div className='chatIcon'
                    style={{ backgroundColor: '#97352a' }}>
                    <svg viewBox="0 0 128 128" fill="currentColor">
                        <path class="cls-1" d="M44.59,4.21a63.28,63.28,0,0,0,4.33,120.9,67.6,67.6,0,0,0,32.36.35A57.13,57.13,0,0,0,107.18,112a57.44,57.44,0,0,0,16-26.26,74.33,74.33,0,0,0,1.61-33.58H65.27c0,8.23,0,16.46,0,24.69H99.74A29.72,29.72,0,0,1,87.08,96.37a36.16,36.16,0,0,1-13.93,5.5,41.29,41.29,0,0,1-15.1,0A37.16,37.16,0,0,1,44,95.74a39.3,39.3,0,0,1-14.5-19.42,38.31,38.31,0,0,1,0-24.63,39.25,39.25,0,0,1,9.18-14.91A37.17,37.17,0,0,1,76.13,27a34.28,34.28,0,0,1,13.64,8q5.83-5.8,11.64-11.63c2-2.09,4.18-4.08,6.15-6.22A61.22,61.22,0,0,0,87.2,4.59,64,64,0,0,0,44.59,4.21Z"></path><path class="cls-2" d="M44.59,4.21a64,64,0,0,1,42.61.37A61.22,61.22,0,0,1,107.55,17.2c-2,2.14-4.11,4.14-6.15,6.22Q95.58,29.23,89.77,35a34.28,34.28,0,0,0-13.64-8,37.17,37.17,0,0,0-37.46,9.74,39.25,39.25,0,0,0-9.18,14.91L8.76,35.6A63.53,63.53,0,0,1,44.59,4.21Z"></path><path class="cls-3" d="M3.26,51.5a62.93,62.93,0,0,1,5.5-15.9L29.49,51.69a38.31,38.31,0,0,0,0,24.63q-10.36,8-20.73,16.08A63.33,63.33,0,0,1,3.26,51.5Z"></path><path class="cls-4" d="M65.27,52.15h59.52a74.33,74.33,0,0,1-1.61,33.58,57.44,57.44,0,0,1-16,26.26c-6.69-5.22-13.41-10.4-20.1-15.62A29.72,29.72,0,0,0,99.74,76.83H65.27C65.26,68.61,65.27,60.38,65.27,52.15Z"></path><path class="cls-5" d="M8.75,92.4q10.37-8,20.73-16.08A39.3,39.3,0,0,0,44,95.74a37.16,37.16,0,0,0,14.08,6.08,41.29,41.29,0,0,0,15.1,0,36.16,36.16,0,0,0,13.93-5.5c6.69,5.22,13.41,10.4,20.1,15.62a57.13,57.13,0,0,1-25.9,13.47,67.6,67.6,0,0,1-32.36-.35,63,63,0,0,1-23-11.59A63.73,63.73,0,0,1,8.75,92.4Z"></path>
                    </svg>
                    </div> </div>
                <div>
                    <div className='author'>Email  <p>Today at {time}</p></div>
                    <div>
                        stantonhuang11@gmail.com
                    </div>
                </div>
            </div>
            <div className='chat'>
                <div className="icon-container"><div className='chatIcon'
                    style={{ backgroundColor: '#ab7f01' }}>
                    <svg viewBox="0 0 32 32" class="icon icon-phone" viewBox="0 0 32 32" aria-hidden="true" fill="#fff"><path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" /></svg>
                </div> </div>
                <div>
                    <div className='author'>Phone  <p>Today at {time}</p></div>
                    <div>
                        (858) 231 6244
                    </div>
                </div>
            </div>
            <div className='chat'>
                <div className="icon-container"><div className='chatIcon'
                    style={{ backgroundColor: '#8532a8' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" name="RichActivity" className="icon-15YQ1T" aria-hidden="false" viewBox="0 0 16 16"><path fill="#fff" d="M6,7 L2,7 L2,6 L6,6 L6,7 Z M8,5 L2,5 L2,4 L8,4 L8,5 Z M8,3 L2,3 L2,2 L8,2 L8,3 Z M8.88888889,0 L1.11111111,0 C0.494444444,0 0,0.494444444 0,1.11111111 L0,8.88888889 C0,9.50253861 0.497461389,10 1.11111111,10 L8.88888889,10 C9.50253861,10 10,9.50253861 10,8.88888889 L10,1.11111111 C10,0.494444444 9.5,0 8.88888889,0 Z" transform="translate(3 3)" /></svg>
                </div> </div>
                <div>
                    <div className='author'>Resume  <p>Today at {time}</p></div>
                    <div>
                        <a target="_blank" rel="noopener noreferrer" href="https://angel.co/stanton-huang">Click Me</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
)


export default Contact;