import Link from "next/link";

export default function TerraformAnsibleAwsPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-slate-700 transition hover:text-slate-900"
          >
            ← Back to home
          </Link>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
            <div className="space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Project case study</p>
                <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
                  Automated Cloud Infrastructure Deployment with Terraform and Ansible
                </h1>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                A cloud automation project that provisioned multi-environment AWS infrastructure with Terraform, configured web servers using Ansible dynamic inventory, and integrated GitHub Actions for infrastructure validation and deployment workflows.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Course", value: "Seneca Polytechnic – ACS730 Cloud Automation and Control Systems" },
                  { label: "Type", value: "Infrastructure as Code / DevOps / Cloud Automation" },
                  { label: "Platform", value: "AWS" },
                  { label: "Role", value: "Student project implementation" },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
                    <p className="mt-3 text-sm font-medium text-slate-900 leading-6">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a
                  href="https://github.com/billzhaohongwei/ACS730FinalProject"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-slate-200 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  View GitHub Repo
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
            <h2 className="text-2xl font-semibold text-slate-900">Project overview</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              This project focused on applying Infrastructure as Code, configuration management, and CI/CD automation to deploy a repeatable AWS hosting environment. Terraform was used to provision cloud infrastructure across multiple environments, while Ansible was used to configure web servers and validate system state. GitHub Actions supported automated Terraform validation, security scanning, and deployment workflows.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-slate-900">Technology tags</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "Terraform",
                  "Ansible",
                  "AWS",
                  "EC2",
                  "VPC",
                  "Public Subnet",
                  "Private Subnet",
                  "NAT Gateway",
                  "Bastion Host",
                  "S3",
                  "GitHub Actions",
                  "TFLint",
                  "Trivy",
                  "Dynamic Inventory",
                  "Security Groups",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
            <h2 className="text-2xl font-semibold text-slate-900">Architecture</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.9fr]">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Infrastructure flow</div>
                <div className="mt-4 space-y-3 text-slate-700">
                  <div>GitHub Repository</div>
                  <div className="ml-4">→ GitHub Actions</div>
                  <div className="ml-8">→ Terraform validation and security scanning</div>
                  <div className="ml-12">→ AWS infrastructure provisioning</div>
                  <div className="ml-16">→ VPC with public and private subnets</div>
                  <div className="ml-20">→ EC2 web servers and bastion host</div>
                  <div className="ml-24">→ NAT Gateway for private subnet internet access</div>
                  <div className="ml-24">→ Ansible control host</div>
                  <div className="ml-24">→ Dynamic inventory</div>
                  <div className="ml-24">→ Web server configuration</div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Implementation details</p>
                <ul className="mt-3 space-y-3 text-slate-700">
                  <li>Terraform provisioned the base AWS infrastructure</li>
                  <li>Ansible configured selected EC2 instances as web servers</li>
                  <li>Bastion host provided controlled access to private instances</li>
                  <li>NAT Gateway allowed private subnet instances to reach the internet</li>
                  <li>S3 stored Terraform state and website images</li>
                  <li>GitHub Actions supported security scanning with tools such as TFLint and Trivy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
            <h2 className="text-2xl font-semibold text-slate-900">Key implementation features</h2>
            <div className="mt-6 grid gap-4">
              {[
                "Created modular Terraform configurations for AWS infrastructure",
                "Provisioned VPC, public subnets, private subnets, EC2 instances, NAT Gateway, and security groups",
                "Supported multiple environments such as dev, staging, and prod",
                "Used S3 for remote Terraform state and website image storage",
                "Configured web servers using Ansible playbooks",
                "Used Ansible dynamic inventory to discover and manage AWS instances",
                "Used a bastion host to access private subnet instances",
                "Used GitHub Actions for Terraform validation, security scanning, and deployment workflows",
                "Applied security checks using tools such as TFLint and Trivy",
                "Documented deployment and cleanup steps in the project repository",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
            <h2 className="text-2xl font-semibold text-slate-900">Challenges and solutions</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Challenge</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">Managing repeatable infrastructure across multiple environments</h3>
                <p className="mt-3 text-slate-700 leading-7">
                  Used modular Terraform code and environment-specific configurations to reduce duplication and support consistent deployments across dev, staging, and prod.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Challenge</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">Configuring multiple web servers after provisioning</h3>
                <p className="mt-3 text-slate-700 leading-7">
                  Used Ansible playbooks and dynamic inventory to automate web server setup, service checks, connectivity checks, and patching tasks.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Challenge</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">Improving infrastructure security and deployment quality</h3>
                <p className="mt-3 text-slate-700 leading-7">
                  Integrated GitHub Actions with infrastructure scanning tools such as TFLint and Trivy to catch issues earlier in the workflow before deployment.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Demo video</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              A recorded walkthrough can be embedded here later to demonstrate Terraform infrastructure deployment, Ansible dynamic inventory, web server configuration, bastion access, and GitHub Actions validation.
            </p>
          </div>
          <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50 p-8 text-center text-slate-600">
            Video embed coming soon
          </div>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
          <h2 className="text-2xl font-semibold text-slate-900">What I learned</h2>
          <ul className="mt-6 space-y-4 text-slate-700">
            {[
              "How to design reusable Terraform modules for AWS infrastructure",
              "How to manage multiple cloud environments with consistent naming and configuration",
              "How public and private subnets, NAT Gateway, and bastion hosts support secure cloud architecture",
              "How Ansible dynamic inventory can automate configuration management for AWS instances",
              "How GitHub Actions can support infrastructure validation, security scanning, and deployment workflows",
              "How DevOps practices improve repeatability, reliability, and security in cloud infrastructure delivery",
            ].map((item) => (
              <li key={item} className="list-disc pl-5 leading-8">{item}</li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Explore more</h2>
            <p className="mt-2 max-w-xl text-slate-600">Continue browsing additional projects or get in touch.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/#projects"
              className="w-full rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 sm:w-auto"
            >
              View more projects
            </Link>
            <Link
              href="/#contact"
              className="w-full rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:w-auto"
            >
              Contact me
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
