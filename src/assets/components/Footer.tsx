
const Footer = () => {
  return (
    <>
      <footer className="bg-[#000] fixed bottom-0 left-0 right-0 p-[5px] xs:text-[1em] sm:text-[1.1em] md:text-[1.2em] lg:text-[1.3em]">
      <p className="text-center">
            Designed and Created by{" "}
            <button>
              <span className="mx-[2px]">
              <a href="https://kodunity.xyz" className="hover:bg-[#a11212] rounded-[5px] px-[3px] py-1 cursor-pointer">
                Kodunity
              </a>
              </span>
            </button>
          </p>
      </footer>
    </>
  )
}

export default Footer
