import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button.jsx'
import Input from './Input.jsx'
import Logo from './Logo.jsx'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next' // added

export default function SignUp() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const { t } = useTranslation() // added

    const create = async (data) => {
        // setError("")
        // try {
        //     const userData = await authService.createAccount(data)
        //     if (userData) {
        //         const currentUser = await authService.getCurrentUser()
        //         if(currentUser) dispatch(login(currentUser));
        //         navigate("/")
        //     }
        // } catch (error) {
        //     setError(error.message)
        // }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-50 px-6 py-10 ">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">{t("Sign up to create account")}</h2>
                <p className="mt-2 text-center text-base text-black/60">
                    {t("Already have an account?")}&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        {t("Sign In")}
                    </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)}>
                    <div className=' space-y-5'>
                        <Input
                            type="text"
                            label={t("Full Name: ")}
                            placeholder={t("Enter your full name")}
                            {...register("name", {
                                required: true,
                            })}
                        />
                        <Input
                            label={t("Email: ")}
                            placeholder={t("Enter your email")}
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPattern: (value) =>
                                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        t("Email address must be a valid address"),
                                }
                            })}
                        />
                        <Input
                            label={t("Password: ")}
                            type="password"
                            placeholder={t("Enter your password")}
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button type="submit" className="w-full">
                            {t("Create Account")}
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}