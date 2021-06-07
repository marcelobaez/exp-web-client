import { createServer, Model, RestSerializer } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      expediente: Model,
    },
    serializers: {
      application: RestSerializer,
    },
    seeds(server) {
      server.create("expediente", {
        id: "1639064",
        code: "EX2021108264GDEEBY-MENT",
        description:
          "FACTURA Nª 0006-00001 ($ 1.000) EMPRESA EJEMPLO S.A. CUIT Nª 30688017889",
        state: "Tramitación",
      });
      server.create("expediente", {
        id: "1639075",
        code: "EX2021108948GDEEBY-MENT",
        description: "Renovación Servicio Empresa ejemplo",
        state: "Guarda Temporal",
      });
      server.create("expediente", {
        id: "1639065",
        code: "EX2021111185GDEEBY-MENT",
        description:
          "EXPTE.Nº 1111/12 EMPRESA SRL C/ JUAN PEREZ S/ EJECUTIVO AMPLIACION DE EMBARGO- OFICIO Nº XX",
        state: "Tramitación",
      });
      server.create("expediente", {
        id: "1639041",
        code: "EX2021111001GDEEBY-MENT",
        description:
          "Solicitud de pago por movilización ENTIDAD 1 - ENTIDAD 2. Convenio Especifico",
        state: "Tramitación",
      });
      server.create("expediente", {
        id: "1639123",
        code: "EX2021111002GDEEBY-MENT",
        description:
          "Solicitud de  Mastil  para [Entidad] de la Provincia de [provincia]",
        state: "Tramitación",
      });
      server.create("expediente", {
        id: "1639298",
        code: "EX2021111003GDEEBY-MENT",
        description: "PROPUESTA DE PRECIOS PARA [ITEMS] - AÑO 2021.",
        state: "Tramitación",
      });
    },
    routes() {
      this.namespace = "api";

      this.get("/expedientes", (schema, request) => {
        const { year, number } = request.queryParams;

        return schema.expedientes.where({
          code: `EX${year}${number}GDEEBY-MENT`,
        });
      });
    },
  });

  return server;
}
