import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What is a nursing recruiter?',
      answer:
        'A nursing recruiter is a professional who helps nurses find job opportunities that match their skills, experience, and career goals.',
    },
    {
      question: 'What are the benefits of working with a nursing recruiter?',
      answer: 'Nursing recruiters have access to a wide range of job opportunities and can help nurses find positions that match their unique needs and preferences. They can also provide guidance and support throughout the job search process.',
    },
    {
      question: 'What qualifications do I need to work with a nursing recruiter?',
      answer:
        'You typically need to have a nursing degree and a valid nursing license to work with a nursing recruiter. Some recruiters may also require a certain level of experience or specialized skills.',
    },
  ],
  [
    {
      question: 'How much does it cost to work with a nursing recruiter?',
      answer:
        'Most nursing recruiters do not charge candidates for their services. They are typically paid by the healthcare facilities that hire their candidates.',
    },
    {
      question:
        'How long does it take to find a job with a nursing recruiter?',
      answer:
        'The time it takes to find a job with a nursing recruiter can vary depending on factors such as your qualifications, experience, and the current job market. It is important to work closely with your recruiter and be patient throughout the job search process.',
    },
    {
      question:
        'What types of job opportunities can nursing recruiters help me find?',
      answer:
        'Nursing recruiters can help you find a variety of job opportunities, including permanent positions, temporary assignments, travel nursing positions, and per diem work.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-blue-100 py-10 sm:py-32 px-2"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="text-2xl font-bold text-bold text-blue-900 sm:text-4xl"
          >
            🤔 Common Questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-blue-900">
           As always, feel free to contact me if you need anything at all!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-semibold text-lg leading-7 text-blue-900">
                      {faq.question}
                    </h3>
                    <p className="mt-2 text-sm text-blue-800">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
