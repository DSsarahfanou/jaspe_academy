import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <>

    <section className="py-5 text-center text-white bg-success">
        <div className="container">
            <h1 className="display-3 fw-bold">Bienvenue sur JaspeAcademy</h1>
            <p className="lead fs-4">Formations en ligne innovantes pour libérer ton potentiel</p>
            <Link href="/auth" className="px-5 py-3 mt-4 shadow btn btn-light btn-lg">Commencer</Link>
        </div>
    </section>

    <section className="container my-5 text-center">
        <h2 className="fw-bold display-5 text-success">Fonctionnalités clés</h2>
        <p className="mb-5 text-muted">Tout ce dont tu as besoin pour apprendre efficacement</p>
        <div className="row g-5">
            <div className="col-md-4">
                <div className="p-4 border rounded shadow-sm bg-light h-100">
                    <Image src="/file.svg" alt="Performance" width={60} height={60} />
                    <h4 className="mt-3 text-success">Performance rapide</h4>
                    <p>Chargement ultra-rapide pour ne jamais perdre de temps.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="p-4 border rounded shadow-sm bg-light h-100">
                    <Image src="/window.svg" alt="Simplicité" width={60} height={60} />
                    <h4 className="mt-3 text-success">Interface intuitive</h4>
                    <p>Navigation facile pensée pour les apprenants de tout niveau.</p>
                </div>
            </div>
            <div className="col-md-4">
                <div className="p-4 border rounded shadow-sm bg-light h-100">
                    <Image src="/globe.svg" alt="SEO" width={60} height={60} />
                    <h4 className="mt-3 text-success">Optimisé SEO</h4>
                    <p>Pour que ton site JaspeAcademy brille sur les moteurs de recherche.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="py-5 text-center text-white bg-success">
        <div className="container">
            <h2 className="display-6 fw-bold">Rejoins notre communauté d'apprenants</h2>
            <p className="fs-5">Avec JaspeAcademy, apprends à ton rythme avec les meilleurs outils.</p>
            <Link href="/signup" className="mt-3 btn btn-outline-light btn-lg">Inscris-toi maintenant</Link>
        </div>
    </section>

    <footer className="py-4 text-center bg-dark text-light">
        <p className="mb-0">© 2025 JaspeAcademy. Tous droits réservés.</p>
    </footer>

  </>
}
