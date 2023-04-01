export default function Example() {
  return (
    <div className="bg-cyan-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-cyan-200">
            Ready to Begin?
          </h2>
          <p className="mt-6 text-lg leading-8 text-cyan-50">
            If you are ready to start your next journey, contact me using one of
            the methods below. I am excited to get the chance to work with you!
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 sm:grid-cols-3 sm:gap-y-16 lg:mx-0 lg:max-w-none">
          <div>
            <h3 className="border-l border-cyan-400 pl-6 text-xl font-bold text-white">
              📧 Email Me
            </h3>
            <address className="border-l border-cyan-200 pl-6 pt-2 text-md not-italic text-cyan-200">
            <a href="mailto:jenniferjones@atlasmedstaff.com">
                <p>jenniferjones@atlasmedstaff.com</p>
              </a>
            </address>
          </div>
          <div>
            <h3 className="border-l border-cyan-400 pl-6 text-xl font-bold text-white">
              ☎️ Call Me
            </h3>
            <address className="border-l border-cyan-200 pl-6 pt-2 text-lg not-italic text-cyan-200">
            <a href="tel:+13083043979">
                <p>1.308.304.3979</p>
              </a>
            </address>
          </div>
          <div>
            <h3 className="border-l border-cyan-400 pl-6 text-xl font-bold text-white">
              💬 Text Me
            </h3>
            <address className="border-l border-cyan-200 pl-6 pt-2 text-lg not-italic text-cyan-200">
              <a href="sms:+13083043979">
                <p>1.308.304.3979</p>
              </a>
            </address>
          </div>
        </div>
      </div>
    </div>
  )
}