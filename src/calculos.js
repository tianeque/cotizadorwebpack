import ajusteGastosGenerales from "./ajusteGastosGenerales";

function calculos(cantidad, parametros) {
  const calculos2 = {
    trabajo: parametros.trabajo,
    cantidad: cantidad,
    moldes: parametros.moldes,
    multiplicidad: parametros.multiplicidad,
    costoresma: parametros.costoresma,
    pagoOperacionesMenores: 15,
    pagoAlzado: 600,
    pagoImpresion: 1600,
    sobrantes: parametros.sobrantes,
    untal: parametros.untal,
    diseno: parametros.diseno,
    gastosGenerales: ajusteGastosGenerales(cantidad),
    utilidad: parametros.utilidad,
    impuesto: parametros.impuesto,
    hojasresma: parametros.hojasresma,
    costotinta: parametros.costotinta,
    alzado: parametros.alzado,
    separado: parametros.separado,
    corcheteado: parametros.corcheteado,
    corte: parametros.corte,
    perforado: parametros.perforado,
    talonarios: function () {
      return this.cantidad / this.untal;
    },
    tirajeUtil: function () {
      return (this.cantidad / this.moldes) * this.multiplicidad;
    },
    tirajeReal: function () {
      return this.tirajeUtil() + this.sobrantes * this.multiplicidad;
    },
    costoPapel: function () {
      return (this.costoresma / this.hojasresma) * this.tirajeReal();
    },
    costoImpresion: function () {
      return this.tirajeReal() * this.costotinta;
    },
    costoManoDeObra: function () {
      const x = this.tirajeUtil() % 1000;
      if (x === 0) {
        return (this.pagoImpresion * this.tirajeUtil()) / 1000;
      } else {
        return this.pagoImpresion * parseInt(this.tirajeUtil() / 1000 + 1);
      }
    },
    costoAlzado: function () {
      if (this.alzado) {
        const x = this.tirajeUtil() % 1000;
        if (x === 0) {
          return (this.pagoAlzado * this.tirajeUtil()) / 1000;
        } else {
          return this.pagoAlzado * (parseInt(this.tirajeUtil() / 1000) + 1);
        }
      } else {
        return 0;
      }
    },
    costoPerforado: function () {
      if (this.perforado) {
        const x = this.tirajeUtil() % 1000;
        if (x === 0) {
          return (this.pagoAlzado * this.tirajeUtil()) / 1000;
        } else {
          return this.pagoAlzado * (parseInt(this.tirajeUtil() / 1000) + 1);
        }
      } else {
        return 0;
      }
    },
    costoTerminado: function () {
      return (this.tirajeUtil() / this.untal) * this.pagoOperacionesMenores;
    },
    costoSeparado: function () {
      if (this.separado) {
        return (this.tirajeUtil() / this.untal) * this.pagoOperacionesMenores;
      } else {
        return 0;
      }
    },
    costoCorcheteado: function () {
      if (this.corcheteado) {
        return (this.tirajeUtil() / this.untal) * this.pagoOperacionesMenores;
      } else {
        return 0;
      }
    },
    costoCorte: function () {
      if (this.corte) {
        return (this.tirajeUtil() / this.untal) * this.pagoOperacionesMenores;
      } else {
        return 0;
      }
    },
    costoOperacional: function () {
      return (
        this.diseno +
        this.costoPapel() +
        this.costoImpresion() +
        this.costoManoDeObra() +
        this.costoAlzado() +
        this.costoSeparado() +
        this.costoCorcheteado() +
        this.costoCorte() +
        this.costoTerminado() +
        this.costoPerforado()
      );
    },
    costoTotal: function () {
      return this.costoOperacional() * (1 + this.gastosGenerales / 100);
    },
    precioDeVenta: function () {
      let precio =
        this.costoTotal() * (1 + this.utilidad / 100) +
        ((this.impuesto / 100) * this.costoTotal() * this.utilidad) / 100;
      precio = Math.ceil(precio / 100) * 100;
      return precio;
    },
    precioConIVA: function () {
      return this.precioDeVenta() * 1.19;
    },
  };

  return calculos2;
}

export default calculos;
