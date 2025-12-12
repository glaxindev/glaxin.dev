const Workflow = () => {
  const steps = ["Design", "Prototype", "Build", "Deploy", "Iterate"];

  return (
    <section id="workflow" className="py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 reveal-up">
          How I Build
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-2 sm:gap-x-3">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center reveal-up">
              <span className="text-sm sm:text-sm md:text-base font-medium text-muted-foreground/80">
                {step}
              </span>

              {index < steps.length - 1 && (
                <>
                  {/* Tiny mobile line */}
                  <div className="sm:hidden w-3 h-px bg-muted-foreground/20 mx-1" />

                  {/* Normal lines for tablet/PC */}
                  <div className="hidden sm:block w-6 md:w-10 lg:w-12 h-px bg-muted-foreground/20 mx-2 md:mx-3" />
                </>
              )}
            </div>
          ))}
        </div>

        <div className="section-divider mt-24" />
      </div>
    </section>
  );
};

export default Workflow;
