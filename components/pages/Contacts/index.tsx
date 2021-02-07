import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { i18n, withTranslation } from '../../../i18n'

type Inputs = {
    Name: string
    'E-Mail': string
    Subject: string
    Message: string
}

const Contacts = ({ t }) => {
    const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(
        false
    )

    const addContactMe = async (data) => {
        try {
            await fetch('/api/newContactMe', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            reset()
            setIsSuccessfullySubmitted(true)
            setTimeout(function () {
                setIsSuccessfullySubmitted(false)
            }, 3000)
        } catch (error) {
            console.error(error)
        }
    }

    const { register, handleSubmit, reset, errors } = useForm<Inputs>()
    const onSubmit = (data) => addContactMe(data)

    return (
        <div
            id="Contacts"
            className={`relative bg-background-pattern bg-fixed bg-cover flex flex-col items-center justify-center p-5 lg:flex-row md:px-32 pb-32`}>
            <div className="flex flex-col items-center justify-center w-2/3 mb-10 md:p-16">
                <div className="text-xl font-bold text-center text-white uppercase md:text-4xl">
                    {t('Contacts.CV')}
                </div>
                <div className="flex flex-col w-full mt-8">
                    <button className="w-full px-4 py-2 mt-5 font-bold text-white uppercase bg-red-600 font-open">
                        <a
                            href={`/static/cv/CV${
                                i18n.language === 'en' ? 'EN' : 'PT'
                            }Light.pdf`}
                            download={`João M. Mota - Curriculum Vitae ${
                                i18n.language === 'en' ? 'EN' : 'PT'
                            } Light`}>
                            {t('Contacts.Light')}
                        </a>
                    </button>
                    <button className="w-full px-4 py-2 mt-5 font-bold text-white uppercase bg-red-600 font-open">
                        <a
                            href={`/static/cv/CV${
                                i18n.language === 'en' ? 'EN' : 'PT'
                            }Dark.pdf`}
                            download={`João M. Mota - Curriculum Vitae ${
                                i18n.language === 'en' ? 'EN' : 'PT'
                            } Light`}>
                            {t('Contacts.Dark')}
                        </a>
                    </button>
                </div>
            </div>
            <form
                className="flex flex-col w-full"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="flex-col w-full">
                        <div className="w-full lg:pr-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-white uppercase font-open">
                                {t('Contacts.Name')}{' '}
                                {errors.Name && (
                                    <span className="text-xs italic text-red-600">
                                        {t('Contacts.FieldRequired')}
                                    </span>
                                )}
                            </label>
                            <input
                                className={`font-open appearance-none block w-full bg-gray-100 text-black border ${
                                    errors.Name && 'border-red-600'
                                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100`}
                                name="Name"
                                ref={register({ required: true })}
                                type="text"
                            />
                        </div>
                        <div className="w-full lg:pr-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-white uppercase font-open">
                                {t('Contacts.E-Mail')}{' '}
                                {errors['E-Mail'] && (
                                    <span className="text-xs italic text-red-600">
                                        {t('Contacts.FieldRequired')}
                                    </span>
                                )}
                            </label>
                            <input
                                className={`font-open appearance-none block w-full bg-gray-100 text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500 ${
                                    errors['E-Mail'] && 'border-red-600'
                                }`}
                                name="E-Mail"
                                type="email"
                                ref={register({ required: true })}
                            />
                        </div>
                        <div className="w-full lg:pr-3">
                            <label className="block mb-2 text-xs font-bold tracking-wide text-white uppercase font-open">
                                {t('Contacts.Subject')}{' '}
                                {errors.Subject && (
                                    <span className="text-xs italic text-red-600">
                                        {t('Contacts.FieldRequired')}
                                    </span>
                                )}
                            </label>
                            <input
                                className={`font-open appearance-none block w-full bg-gray-100 text-blackborder rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500 ${
                                    errors.Subject && 'border-red-600'
                                }`}
                                name="Subject"
                                ref={register({ required: true })}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="w-full mb-9 lg:pl-3">
                        <label className="block mb-2 text-xs font-bold tracking-wide text-white uppercase font-open">
                            {t('Contacts.Message')}{' '}
                            {errors.Name && (
                                <span className="text-xs italic text-red-600">
                                    {t('Contacts.FieldRequired')}
                                </span>
                            )}
                        </label>
                        <textarea
                            className={`font-open no-resize appearance-none block w-full
                            h-full bg-gray-100 text-black border rounded py-4 px-4 leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-500 resize-none ${
                                errors.Message && 'border-red-600'
                            }`}
                            name="Message"
                            ref={register({ required: true })}
                        />
                    </div>
                </div>
                {isSuccessfullySubmitted && (
                    <div className="mt-3 text-center">
                        <div className="p-2">
                            <div className="inline-flex items-center p-2 text-sm leading-none text-white bg-green-500 rounded-full shadow text-teal font-open">
                                <span className="inline-flex items-center justify-center h-6 px-3 text-white bg-green-300 rounded-full">
                                    {t('Contacts.Success')}
                                </span>
                                <span className="inline-flex px-2">
                                    {t('Contacts.FormSuccess')}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
                <button
                    className="w-full px-4 py-2 mt-5 font-bold text-white uppercase bg-red-600 font-open"
                    type="submit">
                    {t('Contacts.Send')}
                </button>
            </form>
        </div>
    )
}

export default withTranslation('common')(Contacts)
