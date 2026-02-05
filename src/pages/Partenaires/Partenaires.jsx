import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

function Partenaires() {
  const partners = [
    { name: 'MINPEEMSA', type: 'Gouvernement', description: 'Ministère de la Petite et Moyenne Entreprise', logo: '🏛' },
    { name: 'PNUD', type: 'Organisation internationale', description: 'Programme des Nations Unies pour le Développement', logo: '🌍' },
    { name: 'CCIM', type: 'Chambre professionnelle', description: 'Chambre de Commerce, d\'Industrie et des Mines', logo: '🏢' },
    { name: 'BNF', type: 'Financeur', description: 'Banque Nationale des Formes', logo: '🏦' },
    { name: 'APME', type: 'Association', description: 'Association des PME du Cameroun', logo: '🤝' },
    { name: ' incubateur', type: 'Accompagnement', description: 'Incubateur national', logo: '🚀' },
  ];

  const projects = [
    { title: 'Appel à projets 2025', status: 'Ouvert', deadline: '31 mars 2025', description: 'Soutien aux startups innovantes' },
    { title: 'Programme Women', status: 'Bientôt', deadline: '15 mai 2025', description: 'Accompagnement des femmes entrepreneurs' },
    { title: 'Fonds d\'innovation', status: 'Ouvert', deadline: '31 décembre 2025', description: 'Financement de l\'innovation' },
  ];

  return (
    <>
      <Helmet><title>Partenaires - STARTERKITCM</title></Helmet>
      
      <div style={{ padding: '100px 24px 60px', background: '#f8f9fa', minHeight: '100vh' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#1a1a2e', marginBottom: '12px' }}>Espace Partenaires</h1>
            <p style={{ fontSize: '16px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Découvrez nos partenaires institutionnels et les opportunités de financement disponibles.
            </p>
          </motion.div>

          {/* Partners Grid */}
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a2e', marginBottom: '24px' }}>Nos partenaires</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '48px' }}>
            {partners.map((partner, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="featured-card" style={{ padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{partner.logo}</div>
                <span className="badge badge-primary">{partner.type}</span>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#1a1a2e', margin: '12px 0 8px' }}>{partner.name}</h3>
                <p style={{ fontSize: '14px', color: '#666' }}>{partner.description}</p>
                <button className="btn-outline" style={{ marginTop: '16px', width: '100%' }}>En savoir plus</button>
              </motion.div>
            ))}
          </div>

          {/* Projects */}
          <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1a1a2e', marginBottom: '24px' }}>Appels à projets</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '700px', margin: '0 auto' }}>
            {projects.map((project, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="featured-card" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '20px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: project.status === 'Ouvert' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: '24px' }}>{project.status === 'Ouvert' ? '✓' : '⏰'}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#1a1a2e', margin: 0 }}>{project.title}</h3>
                    <span className={`badge ${project.status === 'Ouvert' ? 'badge-success' : 'badge-warning'}`}>{project.status}</span>
                  </div>
                  <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>{project.description}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ fontSize: '12px', color: '#9ca3af', margin: '0 0 4px' }}>Date limite</p>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#635bff', margin: 0 }}>{project.deadline}</p>
                </div>
                <button className="btn-primary" style={{ padding: '10px 20px' }}>Postuler</button>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ textAlign: 'center', marginTop: '48px', padding: '32px', background: 'linear-gradient(135deg, #1a1a2e 0%, #2d2d4a 100%)', borderRadius: '20px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, color: 'white', marginBottom: '12px' }}>Vous souhaitez devenir partenaire ?</h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '24px', maxWidth: '500px', margin: '0 auto 24px' }}>
              Rejoignez l'écosystème STARTERKITCM et accompagnez les entrepreneurs camerounais.
            </p>
            <button className="btn-primary" style={{ background: 'white', color: '#635bff' }}>Nous contacter</button>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Partenaires;
