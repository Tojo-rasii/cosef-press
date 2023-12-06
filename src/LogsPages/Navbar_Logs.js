import React from 'react'
import { useState, useEffect } from 'react';
import Logo from '../Tools/images/logo.jpg'
import illu from '../Tools/images/login.png'
import sign from '../Tools/images/signup.png'
import { NavLink, useNavigate } from "react-router-dom";

function Navbar_Logs() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [active, setActive] = useState(false);
    const [pop, setPop] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
        const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptConditions: false,
    });

    // SET ERROR
    const [error, setError] = useState('');

    // FORM SIGNUP
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        // For checkbox input, use `checked` property
        const inputValue = type === 'checkbox' ? checked : value;

        setFormData((prevData) => ({ ...prevData, [name]: inputValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // if don't add anything
        if (!formData.username || !formData.email) {
            alert('Veuillez remplir le champ');
            return;
        }

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // Check if user accepted conditions
        if (!formData.acceptConditions) {
            alert('Please accept the conditions to sign up!');
            return;
        }

        // Check if username or email already exists in local storage
        const storedData = JSON.parse(localStorage.getItem('userData')) || [];
        const existingUser = storedData.find(
            (user) => user.username === formData.username || user.email === formData.email
        );

        if (existingUser) {
            setError('Username or email already exists!');
            return;
        }

        // Save data to local storage
        localStorage.setItem('userData', JSON.stringify([...storedData, formData]));

        // Display alert
            window.alert('Inscription réussie!');
        

        // Additional logic for sending data to server can be added here

        // Clear form data
        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            acceptConditions: false,
        });
        setError('');
    };

    // LOGIN FORM SIGN IN
    const handleLogin = (e) => {
        e.preventDefault();

        // Check if username or email and password are provided
        if (!formData.username || !formData.password) {
            alert('Veuillez remplir le champ');
            return;
        }

        // Get stored user data from local storage
        const storedData = JSON.parse(localStorage.getItem('userData')) || [];

        // Find the user with the provided username
        const loggedInUser = storedData.find((user) => user.username === formData.username || user.email === formData.username);

        // Check if the user exists and the password matches
        if (loggedInUser && loggedInUser.password === formData.password) {
            // Display alert or perform any other actions for successful login
            window.alert('Login successful!');
            // window.location.href = '../Logs/Politique.js';

            // Save login status in local storage if "Remember me" is checked
            if (rememberMe) {
                localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
            }

               // Use React Router's useNavigate to redirect to another page
        navigate('/logsActu');

            // Additional logic, such as redirecting the user to another page
        } else {
            // Display an error message for unsuccessful login
            alert('Invalid username or password');
        }
    };

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

    // CLOSE
    const close = () => {
        document.querySelector(".Pop-Login").style.display = "none";
        setPop(!pop)
    }
    // INSRIPTION
    useEffect(() => {
        const signUp = document.getElementById('signUp');
        const LoginToggle = document.querySelector('.Pop-Login div:nth-child(1)');
        const SignToggle = document.querySelector('.Pop-Login div:nth-child(2)');
        signUp.addEventListener('click', toggleSignUp);
        SignToggle.style.display = "none";

        function toggleSignUp() {
            LoginToggle.classList.add("LoginMain");
            SignToggle.style.display = "block";
        }

        // Login
        const login = document.getElementById('login');
        login.addEventListener('click', togglelogin);

        function togglelogin() {
            LoginToggle.classList.remove("LoginMain");
            SignToggle.style.display = "none";
        }

    }, []);

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
                                <NavLink to="/apropos" style={navLinkStyle}><p>Apropos</p></NavLink>
                            </article>
                            |
                            <article>
                                <NavLink to="/motDuQuesteur" style={navLinkStyle}><p>Mot du questeur</p></NavLink>
                            </article>
                            |
                            <article>
                                <NavLink to="/miniBiographie" style={navLinkStyle}><p>Mini biographie</p></NavLink>
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
                            <NavLink to="/" style={navLinkStyle}><picture>
                                <img src={Logo} alt="logo" />
                                <p className='Logo'>COSEF</p>
                            </picture>
                            </NavLink>
                        </section>

                        {/* CONTENUE */}
                        <section>
                            <article>
                                <NavLink to="/actu" style={navLinkStyle} className={(nav) => (nav.isActive ? "nav-active" : "")}><p>Actualite</p></NavLink>
                            </article>
                            <article>
                                <NavLink to="/aLaUne" style={navLinkStyle} className={(nav) => (nav.isActive ? "nav-active" : "")}><p>A la une</p></NavLink>
                            </article>
                            <article>
                                <NavLink to="/politique" style={navLinkStyle} className={(nav) => (nav.isActive ? "nav-active" : "")}><p>politique</p></NavLink>

                            </article>
                            <article>
                                <NavLink to="/sport" style={navLinkStyle} className={(nav) => (nav.isActive ? "nav-active1" : "")}><p>sport</p></NavLink>

                            </article>
                            <article>
                                <NavLink to="/social" style={navLinkStyle} className={(nav) => (nav.isActive ? "nav-active1" : "")}><p>social</p></NavLink>

                            </article>
                            <article>
                                <NavLink to="/culturel" style={navLinkStyle} className={(nav) => (nav.isActive ? "nav-active" : "")}><p>culturel</p></NavLink>

                            </article>
                        </section>

                        {/* PROFIL */}
                        <section>
                            <article>
                                <NavLink to="/search" className={(nav) => (nav.isActive ? "navSearch-active" : "")}><i className='bi-search text-white fs-5'></i></NavLink>
                            </article>
                            <article>
                                <i className='bi-person-fill text-white fs-5' onClick={toggLog}></i>
                            </article>
                            {/* POP LOGIN */}
                            <div className='Contenu-Login' style={{ display: active ? "block" : "none" }} >
                                <section>
                                    <article>
                                        <span>
                                          
                                        </span>
                                        <span>
                                            <p>{}</p>
                                        </span>
                                    </article>
                                    <article>
                                        <span>
                                            <i class="bi bi-box-arrow-in-left  fs-3" id="btn-Login"></i>
                                        </span>
                                        <span>
                                            <p>Se deconecter</p>
                                        </span>
                                    </article>
                                </section>
                            </div>
                        </section>
                    </nav>
                    <hr className='Hr-ligne' />
                </header>

                {/* LOGIN POP CONNEX */}
                <div className='Pop-Login' style={{ display: pop ? "block" : "none" }} >


                    {/* Login connex
                    this is the pop log */}
                    <div>
                        <main>
                            <section>
                                {/* CLOSE */}
                                <picture className='closePop' title='Close' onClick={close}>
                                    <i className='bi-x'></i>
                                </picture>

                                <article>
                                    <picture>
                                        <img src={illu} alt="illustration" className='illu-Login' />
                                    </picture>
                                </article>
                                <article>
                                    <p>Pas encore inscrit ? <br /> Créez un compte dès maintenant !</p>
                                    <button id="signUp" className="bg-primary border-primary rounded-1 text-white p-2">INSCRIVEZ-VOUS</button>
                                </article>
                            </section>
                            <section>
                                <form>
                                    <article>
                                        <picture>
                                            <img src={Logo} alt="Logo" id='Logo' />
                                        </picture>
                                    </article>
                                    <article className='d-flex flex-column TitleLog'>
                                        <p className='text-uppercase'>CONNEXION</p>
                                        <p>Connectez-vous avec votre compte</p>
                                    </article>
                                    <article>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                                            </svg>
                                        </span>
                                        <span>Facebook</span>
                                    </article>
                                    <article>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                            </svg>
                                        </span>
                                        <span>Google</span>
                                    </article>
                                    <article className='transite-Or d-flex flex-row justify-content-center gap-2 mt-3'>
                                        <span></span>
                                        <span>Ou</span>
                                        <span></span>
                                    </article>
                                </form>
                                <form onSubmit={handleLogin}>
                                    <article>
                                        <span>
                                            <i className="bi-person"></i>
                                        </span>
                                        <span>
                                            <input type="text" name="username"
                                                placeholder="Nom d'utilisateur ou E-mail"
                                                value={formData.username}
                                                onChange={handleChange} />
                                        </span>
                                    </article>
                                    <article>
                                        <span>
                                            <i className="bi-lock"></i>
                                        </span>
                                        <span>
                                            <input type={showPassword ? "text" : "password" } name="password"
                                                placeholder="Mot de passe"
                                                value={formData.password}
                                                onChange={handleChange} maxLength={40}/>
                                            {/* Icon to toggle password visibility */}
                                            <i className={`bi-eye${showPassword ? "-slash" : ""}`}
                                                onClick={() => setShowPassword(!showPassword)}
                                                id="icon-showMdp"
                                            ></i>
                                        </span>
                                    </article>

                                    {/* CHECKBOX ACCEPT */}
                                    <div className='d-flex flex-row gap-2'>
                                        <span>
                                            <input type="checkbox" name="rememberMe"
                                                id="rememberMe"
                                                checked={rememberMe}
                                                onChange={() => setRememberMe(!rememberMe)} />
                                        </span>
                                        <span>
                                            <label for="rememberMe">Remember me</label>
                                        </span>
                                    </div>
                                    <article>
                                        <input type="submit" value="Se connecter" className='text-white' />
                                    </article>

                                    {/* FORGOT PASSWORD */}
                                    <div className='mb-2'>
                                        <span>
                                            Mot de pass oublier ?
                                        </span>
                                    </div>
                                </form>
                            </section>
                        </main>
                    </div>

                    {/* Sign up connex
                    this is the pop Sign */}
                    <div>
                        <main>
                            <section>
                                {/* CLOSE */}
                                <picture className='closePop' title='Close' onClick={close}>
                                    <i className='bi-x'></i>
                                </picture>

                                <article>
                                    <picture>
                                        <img src={sign} alt="illustration" className='illu-Login' />
                                    </picture>
                                </article>
                                <article>
                                    <p>Deja inscrit, veuillez vous connecter.</p>
                                    <button id="login" className="bg-primary border-primary rounded-1 text-white p-2">CONNECTEZ-VOUS</button>
                                </article>
                            </section>
                            <section>
                                <form>
                                    <article>
                                        <picture>
                                            <img src={Logo} alt="Logo" id='Logo' />
                                        </picture>
                                    </article>
                                    <article className='d-flex flex-column TitleLog'>
                                        <p className='text-uppercase'>INSCRIPTION</p>
                                        <p>Creer votre propre compte</p>
                                    </article>
                                    <article className='d-none'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                                            </svg>
                                        </span>
                                        <span>Facebook</span>
                                    </article>
                                    <article className='d-none'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                            </svg>
                                        </span>
                                        <span>Google</span>
                                    </article>
                                    <article className='d-none transite-Or d-flex flex-row justify-content-center gap-2 mt-3'>
                                        <span></span>
                                        <span>Ou</span>
                                        <span></span>
                                    </article>
                                </form>
                                <form onSubmit={handleSubmit}>
                                    <article>
                                        <span>
                                            <i className="bi-person"></i>
                                        </span>
                                        <span>
                                            <input type="text" name="username"
                                                value={formData.username}
                                                onChange={handleChange} placeholder="Nom d'utilisateur"/>
                                        </span>
                                    </article>
                                    <article>
                                        <span>
                                            <i className="bi-at"></i>
                                        </span>
                                        <span>
                                            <input type="email" name="email"
                                                placeholder="Addresse E-mail"
                                                value={formData.email}
                                                onChange={handleChange}/>
                                        </span>
                                    </article>
                                    <article>
                                        <span>
                                            <i className="bi-lock"></i>
                                        </span>
                                        <span>
                                            <input type="password" name="password"
                                                value={formData.password}
                                                onChange={handleChange} placeholder="Mot de passe"/>
                                        </span>
                                    </article>
                                    <article>
                                        <span>
                                            <i className="bi-lock"></i>
                                        </span>
                                        <span>
                                            <input type="password"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange} placeholder="Confirmer le mot de passe"/>
                                        </span>
                                    </article>

                                    {/* CHECKBOX ACCEPT */}
                                    <div className='d-flex flex-row gap-2'>
                                        <span>
                                            <input type="checkbox" name="acceptConditions"
                                                id="acceptConditions"
                                                checked={formData.acceptConditions}
                                                onChange={handleChange} />
                                        </span>
                                        <span>
                                            <label for="acceptConditions">Accepte conditions</label>
                                        </span>
                                    </div>
                                    {/* Display error message */}
                                    {error && <div style={{ color: 'red' }}>{error}</div>}
                                    <article>
                                        <input type="submit" value="S'inscrire" className='text-white' />
                                    </article>
                                </form>
                            </section>
                        </main>
                    </div>
                </div>
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
