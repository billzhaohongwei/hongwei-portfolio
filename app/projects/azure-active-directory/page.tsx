import Link from "next/link";

export default function AzureActiveDirectoryPage() {
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
                  Azure Active Directory Domain Services Architecture
                </h1>
              </div>
              <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                An Azure infrastructure project that deployed a Windows domain environment with AD DS, DNS, IIS, Azure Bastion, VNet peering, and private VM access across multiple virtual networks.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { label: "Course", value: "Seneca Polytechnic – CLO700 Azure Infrastructure Project" },
                  { label: "Type", value: "Azure / Windows Server / Networking" },
                  { label: "Platform", value: "Microsoft Azure" },
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

        <section className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
            <h2 className="text-2xl font-semibold text-slate-900">Project overview</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              This project focused on building a Windows domain environment in Microsoft Azure. I deployed a domain controller, webserver, and client VM across separate virtual networks, configured virtual network peering, enabled secure administrative access with Azure Bastion, installed AD DS and DNS on the domain controller, installed IIS on the webserver, and verified that the client could access the webserver by FQDN after joining the domain.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-slate-900">Technology tags</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "Azure",
                  "Active Directory Domain Services",
                  "DNS",
                  "IIS",
                  "Windows Server",
                  "Windows Client",
                  "Azure Bastion",
                  "Virtual Machines",
                  "Virtual Networks",
                  "VNet Peering",
                  "Private Access",
                  "FQDN",
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
                  <div>Azure Bastion</div>
                  <div className="ml-4">→ Private VM access</div>
                  <div className="ml-8">→ Domain Controller VM with AD DS and DNS</div>
                  <div className="ml-8">→ VNet peering across three virtual networks</div>
                  <div className="ml-8">→ Webserver VM with IIS joined to the domain</div>
                  <div className="ml-8">→ Client VM joined to the domain</div>
                  <div className="ml-8">→ Client accesses IIS website using FQDN</div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Architecture details</p>
                <ul className="mt-3 space-y-3 text-slate-700">
                  <li>The domain controller was placed in its own virtual network.</li>
                  <li>The webserver and client were placed in separate virtual networks.</li>
                  <li>VNet peering connected the networks.</li>
                  <li>Azure Bastion provided browser-based private access to VMs without public IP addresses.</li>
                  <li>AD DS and DNS supported domain join and FQDN-based access.</li>
                  <li>IIS hosted the web page on the Windows Server webserver.</li>
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
                "Created an Azure resource group for the lab environment",
                "Deployed three Azure Virtual Networks with four subnets",
                "Configured Virtual Network Peering between the networks",
                "Deployed a Windows Server domain controller VM",
                "Installed and configured Active Directory Domain Services and DNS",
                "Created domain users and joined machines to the domain",
                "Deployed a Windows Server webserver VM",
                "Installed and configured IIS on the webserver",
                "Deployed a Windows client VM",
                "Used Azure Bastion for secure private VM access",
                "Verified website access from the client VM using FQDN",
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
                <h3 className="mt-2 text-xl font-semibold text-slate-900">Connecting VMs across separate virtual networks</h3>
                <p className="mt-3 text-slate-700 leading-7">
                  Configured Azure Virtual Network Peering so the domain controller, webserver, and client could communicate across different VNets.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Challenge</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">Accessing VMs securely without exposing public IP addresses</h3>
                <p className="mt-3 text-slate-700 leading-7">
                  Used Azure Bastion to connect to virtual machines through the Azure portal while keeping VM access private.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Challenge</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">Ensuring domain-based name resolution and website access</h3>
                <p className="mt-3 text-slate-700 leading-7">
                  Configured AD DS and DNS on the domain controller, joined the webserver and client to the domain, and verified that the client could reach the IIS website using FQDN.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/70">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Demo video</h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              A recorded walkthrough can be embedded here later to demonstrate Azure Bastion access, VNet peering, domain join validation, IIS configuration, and FQDN-based website access from the client VM.
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
              "How to design a basic Windows domain environment in Azure",
              "How Azure Bastion supports secure private VM administration",
              "How VNet peering enables communication across separate virtual networks",
              "How AD DS and DNS support domain join and FQDN resolution",
              "How IIS can be deployed on Windows Server in a domain environment",
              "How to validate infrastructure using client-to-server connectivity testing",
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
