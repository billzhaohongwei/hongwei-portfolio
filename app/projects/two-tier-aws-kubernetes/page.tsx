import Link from "next/link";

export default function TwoTierAwsKubernetesPage() {
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
                  Two-Tier Web Application Deployment with Kubernetes
                </h1>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                A cloud-native deployment project that containerized and deployed a Flask/MySQL application to Amazon EKS with automated image publishing, secure configuration, private S3 asset access, and persistent database storage.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Course", value: "Seneca Polytechnic – CLO835 Portable Technologies in Cloud" },
                  { label: "Type", value: "Cloud / Kubernetes / DevOps" },
                  { label: "Platform", value: "Amazon EKS" },
                  { label: "Role", value: "Student project implementation" },
                ].map((item) => (
                  <div key={item.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{item.label}</p>
                    <p className="mt-3 text-sm font-medium text-slate-900 leading-6">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Project overview</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                This project focused on deploying a two-tier web application to a managed Kubernetes cluster on Amazon EKS. The application included a Flask web service and a MySQL database. I enhanced the application configuration, containerized the app with Docker, automated image publishing to Amazon ECR through GitHub Actions, and deployed the application using Kubernetes manifests.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900">Technology tags</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "AWS EKS",
                  "Docker",
                  "Kubernetes",
                  "Flask",
                  "MySQL",
                  "Amazon ECR",
                  "Amazon S3",
                  "GitHub Actions",
                  "ConfigMap",
                  "Secrets",
                  "IRSA",
                  "PVC",
                  "EBS",
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
            <div className="mt-6 space-y-4 rounded-3xl bg-slate-50 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Deployment flow</div>
              <div className="space-y-3 text-slate-700">
                <div>User</div>
                <div className="ml-4">→ Kubernetes LoadBalancer Service</div>
                <div className="ml-8">→ Flask Application Pod</div>
                <div className="ml-12">→ MySQL Service</div>
                <div className="ml-16">→ MySQL Pod</div>
                <div className="ml-20">→ PersistentVolumeClaim / Amazon EBS</div>
              </div>
            </div>
            <div className="mt-6 space-y-4 rounded-3xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">AWS & Kubernetes integration</p>
              <ul className="mt-3 space-y-3 text-slate-700">
                <li>ConfigMap for application settings</li>
                <li>Secret for MySQL credentials</li>
                <li>Amazon S3 for private background image storage</li>
                <li>IRSA for controlled S3 access</li>
                <li>Amazon ECR for container image hosting</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
            <h2 className="text-2xl font-semibold text-slate-900">Key implementation features</h2>
            <div className="mt-6 grid gap-4">
              {[
                "Containerized the Flask/MySQL application using Docker",
                "Built and published the application image to Amazon ECR using GitHub Actions",
                "Deployed the application to Amazon EKS using Kubernetes manifests",
                "Used ConfigMaps for environment-based application configuration",
                "Used Kubernetes Secrets for MySQL credentials",
                "Stored background images in a private Amazon S3 bucket",
                "Used IRSA to control application access to private S3 assets",
                "Used PersistentVolumeClaim and Amazon EBS for MySQL data persistence",
                "Exposed the Flask application through a stable Kubernetes service",
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
                <h3 className="mt-2 text-xl font-semibold text-slate-900">Securely loading background images from a private S3 bucket</h3>
                <p className="mt-3 text-slate-700 leading-7">
                  Used Kubernetes configuration and controlled AWS access so the application could retrieve background assets without exposing credentials in code.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Challenge</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">Keeping MySQL data after pod recreation</h3>
                <p className="mt-3 text-slate-700 leading-7">
                  Used PersistentVolumeClaim backed by AWS storage so database data could persist even when pods were deleted and recreated.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Challenge</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">Automating image publishing</h3>
                <p className="mt-3 text-slate-700 leading-7">
                  Used GitHub Actions to build, test, and publish the Docker image to Amazon ECR, reducing manual deployment steps.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Demo video</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              A recorded walkthrough is available for this project and can be embedded here later to show the deployment process, Kubernetes resources, S3 image loading, and persistence test.
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
              "How to deploy a containerized two-tier application to a managed Kubernetes platform",
              "How to use Kubernetes ConfigMaps, Secrets, Services, Deployments, and PVCs",
              "How to connect Kubernetes workloads with AWS services such as ECR, S3, EKS, IAM, and EBS",
              "How CI/CD can reduce manual image build and deployment work",
              "How persistence, security, and configuration management affect cloud-native application design",
            ].map((item) => (
              <li key={item} className="list-disc pl-5 leading-7">{item}</li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Explore more</h2>
            <p className="mt-2 text-slate-600">Continue browsing additional projects or get in touch.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#projects"
              className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              View more projects
            </Link>
            <Link
              href="/#contact"
              className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Contact me
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
