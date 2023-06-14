import React from 'react';
import img from '../../assets/c1.jpg';

const NewSection = () => {
    return (
        <div>
            <h2 className='text-4xl mt-10 text-red-400  font-semibold  text-center'>Instagram Shots
            </h2>
            <p className='text-2xl font-serif text-sky-300 text-center mt-2'>Follow us @ instagram</p>
            <div className='md:flex '>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <div className='mt-56'>
                        <div className="chat chat-start">
                            <div className=" chat-bubble text-white chat-bubble-success">Our Victory <br />ChampionShip Dance </div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-bubble chat-bubble-secondary">Cum sociis natoque penatibus et magnis dis parturient ntesmus!</div>

                        </div>


                    </div>
                    <div className="flex flex-col mt-32">
                        <div className="form-control w-52">
                            <label className="cursor-pointer label">
                                <span className="label-text">Healthy Body & Mind</span>
                                <input type="checkbox" className="toggle toggle-primary" checked />
                            </label>
                        </div>
                        <div className="form-control w-52">
                            <label className="cursor-pointer label">
                                <span className="label-text">commodo parturient montesmus.

                                    Great Music & Costumes</span>
                                <input type="checkbox" className="toggle toggle-secondary" checked />
                            </label>
                        </div>
                        <div className="form-control w-52">
                            <label className="cursor-pointer label">
                                <span className="label-text">
                                    Creative & Fun People</span>
                                <input type="checkbox" className="toggle toggle-accent" checked />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewSection;