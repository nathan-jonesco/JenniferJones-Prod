export default function Example() {
    return (
        <div className="bg-white py-10 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <p className="text-base font-semibold leading-7 text-blue-600">
                        Who is Jennifer Jones?
                    </p>
                    <h1 className="mt-2 text-2xl font-bold tracking-tight text-gray-800 sm:text-4xl">
                        Your <b>Dedicated</b> Recruiter.
                    </h1>
                    <div className="mt-8 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
                        <div>
                            <p>
                                {`Jennifer is committed to ensuring that her clients land jobs on time and at an expected pay rate. She has helped countless nurses find fulfilling careers that match their unique skill sets and individual needs. Jennifer understands the importance of achieving a work-life balance, and her expertise in the field has helped her clients achieve just that.`}
                            </p>
                            <p className="mt-8">
                            {`Jennifer's warm and approachable nature makes her a favorite
                                among her clients. Nurses appreciate her honesty, transparency,
                                and steadfast dedication to their success. Jennifer is a
                                tireless advocate for her clients, and she goes above and beyond
                                to make sure that they find the perfect job. She takes the time
                                to understand each nurse's individual needs and works tirelessly
                                to find job opportunities that match those needs.`}
                            </p>
                            <p className="mt-8">
                            {`What sets Jennifer apart from other recruiters is her excellent
                                communication skills and professionalism. She is passionate
                                about helping nurses achieve their career goals and is committed
                                to providing them with the support they need to succeed. Her
                                clients trust her to guide them through the job search process,
                                and she takes that responsibility very seriously.`}
                            </p>
                            <p className="mt-8">
                                {`She is dedicated to providing her clients with the best possible
                                service and support, and she is always available to answer
                                questions and provide guidance. If you are a nurse looking for
                                your next great opportunity, look no further than Jennifer
                                Jones. She will help you take the first step towards your dream
                                career. Contact her today to start your job search and
                                experience the unrivaled dedication and support that only
                                Jennifer can provide.`}
                            </p>
                        </div>
                        <div>
                            <div className="relative pb-10">
                                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                    <img
                                        className="mb-[-12%] rounded-xl shadow-2xl ring-2 ring-blue-700"
                                        src="../JandJ.jpg"
                                        alt=""
                                    />
                                    <div className="relative" aria-hidden="true">
                                        <div className="absolute -inset-x-20 bottom-0 " />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
