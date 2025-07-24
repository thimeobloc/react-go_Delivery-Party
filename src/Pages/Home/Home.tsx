import React from "react"
import { useNavigate } from "react-router-dom"
import "./Home.css"

const Home: React.FC = () => {
  const navigate = useNavigate()

  const currentHour = new Date().getHours()
  const isDay = currentHour >= 7 && currentHour < 16
  const backgroundColor = isDay ? "#bfdbfe" : "#1e3a8a"
  const textColor = isDay ? "#1e3a8a" : "#bfdbfe"
  const encadreStyle = { backgroundColor, color: textColor }

  const clockText = isDay ? "Livreur en repos" : "Livreur en attente de mission"

  return (
    <main className="home-container" style={{ backgroundColor: "#f9fafb" }}>
      <section className="home-intro" style={encadreStyle}>
        <p>
          Delivery Party, ton allié pour sauver ta soirée !<br /><br />
          Il te manque de l’alcool, des chips, des softs, des gâteaux ou des bonbons ? Pas de panique, ce site est là pour que ta soirée ne finisse jamais en famine.<br /><br />
          Nos livreurs, disponibles de 16h à 7h, sont tes héros de la nuit : rapides, efficaces, et toujours prêts à t’apporter ce qu’il te faut.
        </p>
      </section>

      <section className="home-block horloge-block" style={{ borderColor: textColor, color: textColor }}>
        <h2>Horloge</h2>
        <p>
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} — {clockText}
        </p>
      </section>

      <div className="home-grid">
        <section
          className="home-block interactive-block"
          onClick={() => navigate("/reservation")}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === "Enter" && navigate("/reservation")}
        >
          <h2>Réservation</h2>
          <p>Commandez ce qu'il vous faut pour votre soirée</p>
        </section>

        <section
          className="home-block interactive-block"
          onClick={() => navigate("/catalogue")}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === "Enter" && navigate("/catalogue")}
        >
          <h2>Catalogue</h2>
          <p>Découvrez tous nos produits disponibles</p>
        </section>

        <section
          className="home-block interactive-block promo-block"
          onClick={() => navigate("/promotions")}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === "Enter" && navigate("/promotions")}
        >
          <h2>Promotions du jour</h2>
          <p>Découvre nos offres spéciales et réductions exclusives pour ta soirée.</p>
        </section>

        <section
          className="home-block interactive-block reviews-block"
          onClick={() => navigate("/avis")}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === "Enter" && navigate("/avis")}
        >
          <h2>Ce que disent nos clients</h2>
          <p>"Super rapide, très bon service !" - Julie</p>
        </section>

        <section
          className="home-block interactive-block contact-block"
          onClick={() => navigate("/contact")}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === "Enter" && navigate("/contact")}
        >
          <h2>Besoin d’aide ?</h2>
          <p>Notre support est là pour toi, 24/7.</p>
        </section>
      </div>
    </main>
  )
}

export default Home
