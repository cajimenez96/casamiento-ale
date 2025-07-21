import React from 'react';
import './EventSchedule.css';
import { FlourishAnimation, RingsAnimation } from './animations';

const EventSchedule: React.FC = () => {
  const handleAgendar = (event: string) => {
    // TODO: Implement calendar integration
    console.log(`Agendar ${event}`);
  };

  const handleConfirmarAsistencia = (event: string) => {
    // TODO: Implement RSVP functionality
    console.log(`Confirmar asistencia para ${event}`);
  };

  const handleComoLlegar = (address: string) => {
    // TODO: Implement maps integration
    console.log(`Cómo llegar a: ${address}`);
  };

  return (
    <section className="py-5">
      <div className="container">

        {/* Main Content */}
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mt-4 mt-md-0 mb-5 mb-md-0">
            {/* Decorative Header */}
            <div className="mx-auto mb-5 pb-5 mt-4 mt-md-0 decorative-circle d-flex flex-column align-items-center justify-content-center">
              <RingsAnimation width={200} height={200} />
            </div>
            {/* Ceremonia Column */}
            <div className="event-column text-center mt-4">
              <div className="w-50 mx-auto event-header mb-4">
                <h3 className="mb-0">Ceremonia</h3>
              </div>
              
              <div className="event-details d-flex flex-column gap-4">
                <div className="detail-item">
                  <span className="label d-block mb-2">Día</span>
                  <span className="value d-block mb-3">Sábado 15 de Mayo - 17hs</span>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => handleAgendar('Ceremonia')}
                  >
                    AGENDAR
                  </button>
                </div>

                <div className="detail-item">
                  <span className="label d-block mb-2">Lugar</span>
                  <span className="value d-block mb-3">Parroquia Nuestra Señora de Lujan</span>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => handleConfirmarAsistencia('Ceremonia')}
                  >
                    CONFIRMAR ASISTENCIA
                  </button>
                </div>

                <div className="detail-item">
                  <span className="label d-block mb-2">Dirección</span>
                  <span className="value d-block mb-3">Av. Pergamino 203 - BsAs</span>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => handleComoLlegar('Av. Pergamino 203 - BsAs')}
                  >
                    ¿CÓMO LLEGAR?
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mt-5 mt-md-0">
            {/* Decorative Header */}
            <div className="mx-auto mb-5 pb-md-5 mt-4 mt-md-0 decorative-circle d-flex flex-column align-items-center justify-content-center">
              <FlourishAnimation width={200} height={200} />
            </div>
            {/* Celebración Column */}
            <div className="event-column text-center mt-4">
              <div className="w-50 mx-auto event-header my-4">
                <h3 className="mb-0">Celebración</h3>
              </div>
              
              <div className="event-details d-flex flex-column gap-4">
                <div className="detail-item">
                  <span className="label d-block mb-2">Día</span>
                  <span className="value d-block mb-3">Sábado 15 de Mayo - 20hs</span>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => handleAgendar('Celebración')}
                  >
                    AGENDAR
                  </button>
                </div>

                <div className="detail-item">
                  <span className="label d-block mb-2">Lugar</span>
                  <span className="value d-block mb-3">Salon de fiestas Avril</span>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => handleConfirmarAsistencia('Celebración')}
                  >
                    CONFIRMAR ASISTENCIA
                  </button>
                </div>

                <div className="detail-item">
                  <span className="label d-block mb-2">Dirección</span>
                  <span className="value d-block mb-3">Av. Los Reartes 12 - BsAs</span>
                  <button 
                    className="btn btn-outline-secondary"
                    onClick={() => handleComoLlegar('Av. Los Reartes 12 - BsAs')}
                  >
                    ¿CÓMO LLEGAR?
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule; 