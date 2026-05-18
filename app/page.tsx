import Image from "next/image";
import Link from "next/link";

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

        <section className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-stretch">
          <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
            <div className="flex flex-col gap-6 items-start sm:flex-row sm:items-start">
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
                <div className="mt-8 inline-flex max-w-fit rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm leading-6 text-slate-700">
                  Open to work • Toronto / Remote / Hybrid
                </div>
              </div>
            </div>
          </div>
          <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
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
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">About</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">Professional snapshot</h2>
            <p className="mt-4 max-w-2xl text-sm text-slate-500 sm:text-base leading-7">
              I combine hands-on IT support experience with cloud and full-stack development skills to build practical, reliable, and maintainable solutions.
            </p>
          </div>
          <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-7 shadow-sm shadow-slate-200/60">
              <h3 className="text-xl font-bold text-slate-950">What I do</h3>
              <p className="mt-4 text-slate-700 leading-8">
                I build and support web applications, cloud infrastructure, and deployment workflows using React, TypeScript, Firebase, AWS, Azure, Docker, Kubernetes, and automation tools.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-50 p-7 shadow-sm shadow-slate-200/60">
              <h3 className="text-xl font-bold text-slate-950">Why it matters</h3>
              <p className="mt-4 text-slate-700 leading-8">
                My background in support, development, and cloud operations helps me understand both user needs and technical systems, so I can create solutions that are easier to use, operate, and maintain.
              </p>
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

        <section id="certifications" className="mt-16">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">CERTIFICATIONS</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Cloud certifications</h2>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
              <h3 className="text-lg font-semibold text-slate-900">AWS Certified Solutions Architect – Associate</h3>
              <p className="mt-2 text-sm text-slate-500">SAA-C03 • Issued Feb 2026</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
              <h3 className="text-lg font-semibold text-slate-900">AWS Certified Cloud Practitioner</h3>
              <p className="mt-2 text-sm text-slate-500">CLF-C02 • Issued Oct 2025</p>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-16">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Featured Projects</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">Selected work</h2>
            <p className="mt-4 text-sm text-slate-600 sm:text-base">
              A curated selection of cloud, DevOps, and full-stack projects that demonstrate practical architecture, deployment automation, and technical support experience.
            </p>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "Needlist.ORG Charity Platform MVP",
                description: "Contributed to a charity platform MVP supporting donation workflows, Firebase backend services, payment-related processes, email automation, receipt generation, and deployment configuration.",
                tags: ["React", "Firebase", "Firestore", "Cloud Functions", "Stripe", "SendGrid", "CI/CD"],
              },
              {
                title: "Expense Management Kubernetes Deployment",
                description: "Cloud-native expense app deployed with Kubernetes, PostgreSQL, Azure VMs, Terraform, and Docker containers.",
                tags: ["Kubernetes", "Terraform", "Azure", "PostgreSQL"],
              },
              {
                title: "Two-Tier AWS Kubernetes Web App",
                description: "Deployed a Flask/MySQL application on Amazon EKS using Docker, Kubernetes manifests, ECR, S3, Secrets, ConfigMaps, and persistent MySQL storage.",
                tags: ["AWS EKS", "Docker", "Kubernetes", "MySQL", "ECR", "S3", "GitHub Actions"],
                detailsPath: "/projects/two-tier-aws-kubernetes",
              },
              {
                title: "Automated Cloud Infrastructure Deployment with Terraform and Ansible",
                description: "Provisioned multi-environment AWS infrastructure with Terraform modules, configured web servers with Ansible dynamic inventory, and automated security scans and deployment workflows using GitHub Actions.",
                tags: ["Terraform", "Ansible", "AWS", "GitHub Actions", "TFLint", "Trivy", "S3", "NAT Gateway"],
                detailsPath: "/projects/terraform-ansible-aws",
              },
              {
                title: "Azure Active Directory Domain Services Architecture",
                description: "Designed an Azure-based Windows domain environment with AD DS, DNS, IIS, Azure Bastion, VNet peering, and private VM access across three virtual networks.",
                tags: ["Azure", "AD DS", "DNS", "IIS", "VNet Peering", "Bastion", "Windows Server"],
                detailsPath: "/projects/azure-active-directory",
              },
              {
                title: "Secure Backup Solution for Remote Workforce",
                description: "Built a backup automation design with VPN access, encryption, centralized restore management, and remote workforce security.",
                tags: ["VPN", "Backup", "Encryption", "Security"],
              },
            ].map((project) => (
              <article key={project.title} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-slate-600 leading-7">{project.description}</p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.detailsPath ? (
                  <div className="mt-6">
                    <Link
                      href={project.detailsPath}
                      className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                    >
                      View details
                    </Link>
                  </div>
                ) : null}
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
                role: "Technical Support & Administrative Assistant",
                company: "Wisdom Academy Toronto",
                period: "IT support and server operations",
                highlights: [
                  "Delivered Windows, Linux, and Moodle support for staff and students.",
                  "Managed website, email, and documentation tasks.",
                  "Troubleshot infrastructure and user issues with clear communication.",
                ],
              },
              {
                role: "Customer Service Representative",
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
