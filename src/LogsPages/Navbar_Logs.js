import React from 'react'
import { useState, useEffect } from 'react';
import Logo from '../Tools/images/logo.jpg'
import illu from '../Tools/images/login.png'
import sign from '../Tools/images/signup.png'
import profile from '../Tools/images/profile.png';
import { NavLink, useNavigate } from "react-router-dom";
import { auth, database } from '../firebase/FirebaseConfig';

function Navbar_Logs() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [active, setActive] = useState(false);
    const [pop, setPop] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

  

    // DATE A JOUR
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const optionsDay = { weekday: 'long' };
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const formattedDay = currentDate.toLocaleDateString('fr-FR', optionsDay);
    const formattedDate = currentDate.toLocaleDateString('fr-FR', options);

    // LIST CLOSE
    useEffect(() => {
        const list = document.getElementById("list");
        const close = document.getElementById("close");
        //home
        if (isDarkMode) {
            list.style.display = "none";
            close.style.display = "block";
        } else {
            list.style.display = "block";
            close.style.display = "none";
        }
    }, [isDarkMode]);

    // NAVAECTIVE
    const navLinkStyle = {
        textDecoration: "none",
        color: "black", // Customize the color as needed
    };

    const toggLog = () => {
        setActive(!active)
        setIsDarkMode(prevMode => !prevMode);
    }

    //POP-MOBILE
    const togg = () => {
        setActive(!active)
        setIsDarkMode(prevMode => !prevMode);
    }

    const [loggedInUsername, setLoggedInUsername] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    // useEffect pour récupérer les informations de l'utilisateur connecté lors du rendu initial
    useEffect(() => {
        // Set up Firebase auth state observer
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                // User is signed in, set the email to the state
                setLoggedInUsername(user.email);
            } else {
                // No user is signed in, clear the state
                setLoggedInUsername('');
            }
        });

        // Clean up the observer
        return () => unsubscribe();
    }, []);

    

    // useEffect(() => {
    //     const storedImage = localStorage.getItem('selectedImage');
    //     if (storedImage) {
    //         setSelectedImage(storedImage);
    //     }
    // }, []);

    const logOut = () => {
        // Clear selected image from localStorage
        localStorage.removeItem('selectedImage');
        // Perform logout actions
        window.location.href = "/";
        setShowPopup(false);
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <>
            <div className='Laptop'>
                <header className='Navbar'>
                    {/* Nav1 */}
                    <nav className='Nav1'>
                        {/* SECTION DATE */}
                        <section>
                            <article>
                                <i className="bi-calendar2-event" id='iconCalendar'></i>
                            </article>
                            <article>
                                <span style={{ textTransform: "capitalize" }}>{formattedDay},</span>
                                <span>{formattedDate}</span>
                            </article>
                        </section>

                        {/* SECTION CONTENUE */}
                        <section>
                            <article>
                                <NavLink to="/logsApropos" style={navLinkStyle}><p>Apropos</p></NavLink>
                            </article>
                            |
                            <article>
                                <NavLink to="/logsMotDuQuesteur" style={navLinkStyle}><p>Mot du questeur</p></NavLink>
                            </article>
                            |
                            <article>
                                <NavLink to="/logsMiniBiographie" style={navLinkStyle}><p>Mini biographie</p></NavLink>
                            </article>
                        </section>

                        {/* SECTION CONTACT */}
                        <section>
                            <article>
                                <span>
                                    <i className="bi-camera-reels">&nbsp;</i>
                                </span>
                                <span>
                                    WEB RADIO
                                </span>
                            </article>
                        </section>
                    </nav>
                    {/* Nav2 */}
                    <nav className='Nav2'>
                        {/* LOGO */}
                        <section>
                            <NavLink to="/logsHome" style={navLinkStyle}><picture>
                                <img src={Logo} alt="logo" />
                                <p className='Logo'>COSEF</p>
                            </picture>
                            </NavLink>
                        </section>

                        {/* CONTENUE */}
                        <section>
                            <article>
                                <NavLink to="/logsActu" style={navLinkStyle} className={(nav) => (nav.isActive ? "nav-active" : "")}><p>Actualite</p></NavLink>
                            </article>
                            <article>
                                <NavLink to="/logsAlaune" style={navLinkStyle} className={(nav) => (nav.isActive ? "nav-active" : "")}><p>A la une</p></NavLink>
                            </article>
                            <article>
                                <NavLink to="/logsPolitique" style={navLinkStyle} className={(nav) => (nav.isActive ? "nav-active" : "")}><p>politique</p></NavLink>

                            </article>
                            <article>
                                <NavLink to="/logsSport" style={navLinkStyle} className={(nav) => (nav.isActive ? "nav-active1" : "")}><p>sport</p></NavLink>

                            </article>
                            <article>
                                <NavLink to="/logsSocial" style={navLinkStyle} className={(nav) => (nav.isActive ? "nav-active1" : "")}><p>social</p></NavLink>

                            </article>
                            <article>
                                <NavLink to="/logsCulturel" style={navLinkStyle} className={(nav) => (nav.isActive ? "nav-active" : "")}><p>culturel</p></NavLink>

                            </article>
                        </section>

                        {/* PROFIL */}
                        <section>
                            <article>
                                <NavLink to="/logsSearch" className={(nav) => (nav.isActive ? "navSearch-active" : "")}><i className='bi-search text-white fs-5'></i></NavLink>
                            </article>
                            <article>
                                <img src={selectedImage || profile} alt="profile" onClick={toggLog} className='profileNav'/>
                            </article>
                            {/* POP LOGIN */}
                            <div className='Contenu-Login' id='Contenu-Login' style={{ display: active ? "block" : "none" }} >
                                <section>

                                    <p className='text-white ms-2 fs-6'><span className='text-lowecase'>{loggedInUsername}</span><br />Connecte(e)<i className='bi-dot fs-3 text-success'></i></p>
                                    <NavLink to="/logsProfile" style={{ textDecoration: "none" }}>
                                        <article style={{ marginTop: "-1em" }}>
                                            <span>
                                                <i class="bi-person-fill fs-3" id="btn-Login"></i>
                                            </span>

                                            <span>
                                                <p>Profile</p>
                                            </span>
                                        </article> </NavLink>
                                    <article onClick={togglePopup}>
                                        <span>
                                            <i class="bi bi-box-arrow-in-left  fs-3" id="btn-Login"></i>
                                        </span>
                                        <span>
                                            <p>Se deconecter</p>
                                        </span>
                                    </article>
                                    {showPopup && (
                                        <div className="popup-container">
                                            <div className="popup">
                                                <p className='h5 fw-semibold'>Deconnexion</p>
                                                <p>Voulez-vous vraiment vous déconnecter ?</p>
                                                <span>
                                                    <button onClick={logOut} className='shadow-sm'>Oui</button>
                                                    <button onClick={togglePopup} className='shadow-sm'>Annuler</button>
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </section>
                            </div>
                        </section>
                    </nav>
                    <hr className='Hr-ligne' />
                </header>
                </div>

            {/* MOBILE */}
            <div className='Mobile'>
                {/* NAV MOBILE */}
                <header className='Navbar-Mobile'>
                    {/* Nav1 */}
                    <nav className='Nav1'>
                        {/* SECTION DATE */}
                        <section>
                            <article>
                                <i className="bi-calendar2-event" id='iconCalendar'></i>
                            </article>
                            <article>
                                <span style={{ textTransform: "capitalize" }}>{formattedDay},</span>
                                <span>{formattedDate}</span>
                            </article>
                        </section>

                        {/* SECTION CONTACT */}
                        <section>
                            <button>Contactez-nous</button>
                        </section>
                    </nav>
                    {/* Nav2 */}
                    <nav className='Nav2'>
                        {/* LOGO */}
                        <section>
                            <picture>
                                <img src={Logo} alt="logo" />
                                <p className=''>COSEF</p>
                            </picture>
                        </section>

                        {/* PROFIL */}
                        <section>
                            <article>
                                <i className='bi-search text-white fs-5'></i>
                            </article>
                            <article>
                                <i className='bi-person-fill text-white fs-5'></i>
                            </article>
                            <article>
                                <i className='bi-list text-white fs-5' id="list" onClick={togg}></i>
                            </article>
                            <article>
                                <i className='bi-x text-white fs-5' id="close" onClick={togg}></i>
                            </article>

                            {/* CONTENUE */}
                            <div className='position-absolute mt-5 Contenu_Mobile' style={{ display: active ? "block" : "none" }} >
                                <section>
                                    <article>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" id='icon-Mobile' x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                                                <path d="M 7.5 6 C 5.019 6 3 8.019 3 10.5 L 3 35.5 C 3 39.084 5.916 42 9.5 42 L 38.5 42 C 42.084 42 45 39.084 45 35.5 L 45 18.5 C 45 16.19 43.244 14.302781 41 14.050781 L 41 34.5 C 41 35.328 40.328 36 39.5 36 C 38.672 36 38 35.328 38 34.5 L 38 10.5 C 38 8.019 35.981 6 33.5 6 L 7.5 6 z M 10.5 15 L 30.5 15 C 31.329 15 32 15.672 32 16.5 C 32 17.328 31.329 18 30.5 18 L 10.5 18 C 9.671 18 9 17.328 9 16.5 C 9 15.672 9.671 15 10.5 15 z M 10.5 23 L 17.5 23 C 18.329 23 19 23.672 19 24.5 L 19 31.5 C 19 32.328 18.329 33 17.5 33 L 10.5 33 C 9.671 33 9 32.328 9 31.5 L 9 24.5 C 9 23.672 9.671 23 10.5 23 z M 23.5 23 L 30.5 23 C 31.329 23 32 23.672 32 24.5 C 32 25.328 31.329 26 30.5 26 L 23.5 26 C 22.671 26 22 25.328 22 24.5 C 22 23.672 22.671 23 23.5 23 z M 12 26 L 12 30 L 16 30 L 16 26 L 12 26 z M 23.5 30 L 30.5 30 C 31.329 30 32 30.672 32 31.5 C 32 32.328 31.329 33 30.5 33 L 23.5 33 C 22.671 33 22 32.328 22 31.5 C 22 30.672 22.671 30 23.5 30 z"></path>
                                            </svg></span>
                                        <span><p>actualite</p></span>
                                    </article>
                                    <article>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" id='icon-Mobile' width="30" height="30" fill="currentColor" class="bi bi-clipboard-check-fill" viewBox="0 0 16 16">
                                            <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
                                        </svg></span>
                                        <span><p>a la une</p></span>
                                    </article>
                                    <article>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" id='icon-Mobile' height="30" fill="currentColor" class="bi bi-bank2" viewBox="0 0 16 16">
                                                <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1z" />
                                            </svg></span>
                                        <span><p>politique</p></span>
                                    </article>
                                    <article>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" id='icon-Mobile' height="30" fill="currentColor" class="bi bi-trophy-fill" viewBox="0 0 16 16">
                                                <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                                            </svg></span>
                                        <span><p>sport</p></span>
                                    </article>
                                    <article>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" id='icon-Mobile' class="bi bi-people-fill" viewBox="0 0 16 16">
                                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                            </svg></span>
                                        <span><p>social</p></span>
                                    </article>
                                    <article>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" id='icon-Mobile' width="30" height="30" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16">
                                            <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                                        </svg></span>
                                        <span><p>culturel</p></span>
                                    </article>
                                </section>
                            </div>
                        </section>
                    </nav>
                    <hr className='Hr-ligne2' />
                </header>
            </div>
        </>
    )
}

export default Navbar_Logs
