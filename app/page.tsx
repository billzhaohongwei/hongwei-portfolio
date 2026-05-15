import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
        <nav className="mb-10 rounded-3xl bg-white px-6 py-5 shadow-sm shadow-slate-200/70 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-lg font-semibold tracking-tight text-slate-900">
              Hongwei Zhao
            </div>
            <div className="flex flex-wrap items-center justify-start gap-4 text-base font-medium text-slate-700 sm:justify-end">
              <a className="transition hover:text-slate-900" href="#about">
                About
              </a>
              <a className="transition hover:text-slate-900" href="#skills">
                Skills
              </a>
              <a className="transition hover:text-slate-900" href="#projects">
                Projects
              </a>
              <a className="transition hover:text-slate-900" href="#experience">
                Experience
              </a>
              <a className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </nav>

        <section className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-lg shadow-slate-200/60 sm:h-36 sm:w-36">
                <Image
                  src="/profile.jpg"
                  alt="Hongwei Zhao profile photo"
                  fill
                  sizes="(min-width: 768px) 144px, 128px"
                  className="object-cover"
                />
              </div>
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                  Toronto, Ontario
                </p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                  Cloud & Full-Stack Developer
                </h1>
                <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">
                  I build reliable web applications and cloud solutions with a focus on full-stack development, DevOps automation, and practical IT support.
                </p>
              </div>
            </div>
            <div className="mt-8 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm text-slate-700">
              Available for Cloud, DevOps, and Full-Stack roles
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
            <h2 className="text-xl font-semibold text-slate-900">Technical Snapshot</h2>
            <div className="mt-6 space-y-6 text-slate-700">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Frontend</p>
                <p className="mt-3 text-base leading-7">React, TypeScript, Next.js, Tailwind CSS</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Cloud & DevOps</p>
                <p className="mt-3 text-base leading-7">AWS, Azure, Firebase, Docker, Kubernetes, Terraform, GitHub Actions</p>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">IT & Systems</p>
                <p className="mt-3 text-base leading-7">Linux, Windows Support, Active Directory, troubleshooting, documentation</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">About</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Professional snapshot</h2>
            </div>
            <p className="text-sm text-slate-500">Toronto-based technology professional with cloud, DevOps, and support experience.</p>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">What I do</h3>
              <p className="text-slate-700 leading-7">I design, deploy, and support modern web applications and cloud infrastructure using a combination of front-end frameworks, automation tools, and best practices.</p>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">Why it matters</h3>
              <p className="text-slate-700 leading-7">My approach helps teams deliver dependable systems faster, with clearer operations, strong security posture, and stable user experiences.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Skills</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Technical strengths</h2>
            </div>
            <p className="text-sm text-slate-500">Clear skill coverage for cloud, DevOps, and full-stack work.</p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "React",
              "TypeScript",
              "Next.js",
              "Tailwind CSS",
              "Firebase",
              "AWS",
              "Azure",
              "Docker",
              "Kubernetes",
              "Terraform",
              "GitHub Actions",
              "Linux",
              "Windows Support",
            ].map((skill) => (
              <div key={skill} className="rounded-3xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 shadow-sm shadow-slate-200/60">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Featured Projects</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Selected work</h2>
            </div>
            <p className="text-sm text-slate-500">Projects that demonstrate cloud, Kubernetes, and infrastructure automation expertise.</p>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Needlist.ORG Platform",
                description: "Full-stack nonprofit platform with Firebase, Firestore, Cloud Functions, Stripe, SendGrid, and CI/CD deployment.",
              },
              {
                title: "Expense Management Application Deployment with Kubernetes",
                description: "Deployed a cloud-native expense management app with Kubernetes, PostgreSQL, Azure VMs, Terraform, and Docker.",
              },
              {
                title: "Two-Tier Web Application Deployment with Kubernetes",
                description: "Containerized Flask/MySQL application deployed to AWS EKS with persistent storage, S3, and GitHub Actions.",
              },
              {
                title: "Automated Cloud Infrastructure with Terraform and Ansible",
                description: "Provisioned AWS infrastructure and automated server configuration with Terraform, Ansible, and CI/CD quality checks.",
              },
              {
                title: "Active Directory Domain Services Architecture on Azure",
                description: "Designed Windows Server AD architecture on Azure with VNet peering, Bastion, IIS, and private DNS.",
              },
            ].map((project) => (
              <article key={project.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
                <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                <p className="mt-3 text-slate-600 leading-7">{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Experience</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Professional experience</h2>
            </div>
            <p className="text-sm text-slate-500">Roles showcasing development, cloud, and IT support experience.</p>
          </div>
          <div className="mt-8 space-y-6">
            {[
              {
                role: "Full-Stack Developer",
                company: "Needlist.ORG",
                period: "Cloud and nonprofit platform",
                highlights: [
                  "Built React and FlutterFlow interfaces with Firebase and Firestore.",
                  "Integrated Stripe payments, SendGrid email, and tax receipt automation.",
                  "Supported CI/CD deployment and multi-environment configuration.",
                ],
              },
              {
                role: "Technical Support",
                company: "Wisdom Academy Toronto",
                period: "IT support and server operations",
                highlights: [
                  "Delivered Windows, Linux, and Moodle support for staff and students.",
                  "Managed website, email, and documentation tasks.",
                  "Troubleshot infrastructure and user issues with clear communication.",
                ],
              },
              {
                role: "Technical Support Specialist",
                company: "TTEC Canada",
                period: "Customer support and remote troubleshooting",
                highlights: [
                  "Resolved technical issues with professionalism and efficiency.",
                  "Worked in ticket-style support workflows and remote assistance.",
                  "Enhanced communication skills with diverse customer needs.",
                ],
              },
            ].map((item) => (
              <div key={item.role + item.company} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{item.role}</h3>
                    <p className="text-sm text-slate-500">{item.company}</p>
                  </div>
                  <p className="text-sm font-medium text-slate-700">{item.period}</p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-16 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm shadow-slate-900/20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Contact</p>
              <h2 className="mt-2 text-2xl font-semibold">Ready to connect?</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-300">
              I am open to new opportunities in cloud, DevOps, IT support, and full-stack development. Let’s discuss how I can support your team.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-800 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Location</p>
              <p className="mt-3 text-lg font-semibold text-white">Toronto, Ontario</p>
            </div>
            <div className="rounded-3xl bg-slate-800 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Message</p>
              <p className="mt-3 text-lg font-semibold text-white">Let’s build practical cloud and web solutions together.</p>
            </div>
          </div>
          <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-950 px-6 py-6 text-slate-100 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Email</p>
              <p className="mt-2 text-base font-semibold">zhahongwei14@gmail.com</p>
            </div>
            <a
              href="mailto:zhahongwei14@gmail.com"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 sm:mt-0"
            >
              Send a message
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
