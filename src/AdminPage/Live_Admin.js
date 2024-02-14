import React, { useState } from 'react';
import Recorder from 'recorder-js';

function Live_Admin() {
    const [isRecording, setIsRecording] = useState(false);
    const [recorder, setRecorder] = useState(null);

    const startRecording = async () => {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const newRecorder = new Recorder(audioContext, {
                numberOfChannels: 1,
                sampleRate: 44100,
            });
            newRecorder.init(stream);
            newRecorder.start();
            setIsRecording(true);
            setRecorder(newRecorder);
        } catch (error) {
            console.error('Error starting recording:', error);
        }
    };

    const stopRecording = () => {
        if (recorder) {
            recorder.stop().then(({ blob }) => {
                // Enregistrez le blob audio où vous voulez
                console.log('Blob audio enregistré:', blob);
            });
            setIsRecording(false);
        }
    };

    return (
        <div>
            <main>
                <section>
                    <article>
                        <span>
                            <p className='fs-3 fw-bold p-1'>Live radio</p>
                        </span>
                    </article>
                </section>
                <section className='d-flex flex-column align-items-center gap-4'>
                    <article>
                        <span className='d-flex flex-row align-items-center gap-3'>
                            <p className={`p-2 bg-white rounded-2 shadow-sm ${isRecording ? 'text-danger' : ''}`} onClick={isRecording ? stopRecording : startRecording}>
                                <i className={`bi-${isRecording ? 'stop' : 'play'}-circle`}></i>{isRecording ? 'Arrêt' : 'Marche'}
                            </p>
                            <p className='p-2 bg-white rounded-2 shadow-sm'><i className="bi-download">&nbsp;</i>Enregistrer</p>
                        </span>
                    </article>
                    <article className='p-2 bg-white rounded-2 shadow-sm'>
                        <span className='d-flex flex-row justify-content-between gap-5'>
                            <i className="bi-circle-fill text-success"></i>
                            <p>Live du jour <em className='fw-semibold'>12 janvier</em></p>
                        </span>
                        <span>
                            <svg className="equalizer-svg" version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="90" height="90" viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet">
                                {/* Votre code SVG pour l'égaliseur */}
                            </svg>
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="90" height="90" viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet" id="svg2-live">
                                {/* Votre code SVG pour le lecteur */}
                            </svg>
                        </span>
                    </article>
                </section>
            </main>
        </div>
    )
}

export default Live_Admin;
