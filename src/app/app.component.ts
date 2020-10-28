import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import jsPDF from 'jspdf'


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})


export class AppComponent {
	title = 'Crédito línea 4'
  form = new FormGroup({})
  options: FormlyFormOptions = {};
  model: any = {
  }

  fields: FormlyFieldConfig[] = [
    {
      className: 'datos-solicitante',
      template: '<div class="coltit"><h2 style="color:#53aae0;">Datos del solicitante del préstamo:</h2></div>',
    },


    // SOLICITANTE

    {
      key: 'Solicitante',
      type: 'no repeat',
      templateOptions: {
        addText: 'Ingresar sus datos',
      },
      fieldArray: {
        fieldGroup: [
        {
          className: 'datos-persona',
          template: '<div><h2>Datos de la persona:</h2></div>',
        },
        {
          key: 'Apellido',
          type: 'input',
          templateOptions: {
            label: 'Apellido',
            placeholder: 'Ingrese su apellido',
            required: true,
          },
        },
        {
          key: 'Nombres',
          type: 'input',
          templateOptions: {
            label: 'Nombres',
            placeholder: 'Ingrese sus nombres',
            required: true,
          },
        },
        {
          key: 'Sexo',
          type: 'select',
          templateOptions: {
            label: 'Sexo',
            placeholder: 'Placeholder',
            required: true,
            options: [
              { value: "masculino", label: 'Masculino'  },
              { value: "femenino", label: 'Femenino'  },
            ],
          },
        },
        {
          key: 'DNI',
          type: 'input',
          templateOptions: {
            label: 'DNI',
            placeholder: 'Su Dni',
            required: true,
            pattern: '\\d{7,8}',
          },
        },
        {
          key: 'CUIL',
          type: 'input',
          templateOptions: {
            label: 'CUIL',
            placeholder: 'Su CUIL',
            required: true,
            pattern: '\\d{11}',
          },
        },
        {
          key: 'Nacionalidad',
          type: 'input',
          templateOptions: {
            label: 'Nacionalidad',
            placeholder: 'Su Nacionalidad',
            required: true,
          },
        },
        {
          key: 'Fecha de Nacimiento',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Fecha de nacimiento',
            //placeholder: 'Su Fecha de nacimiento dd/mm/aaaa',
            required: true,
          },
        },
        {
          key: 'Estado civíl',
          type: 'select',
          templateOptions: {
            label: 'Estado Civil',
            placeholder: 'Placeholder',
            options: [
              { value: "Soltero", label: 'Soltero'  },
              { value: "Casado", label: 'Casado'  },
              { value: "Divorciado", label: 'Divorciado'  },
              { value: "Separado", label: 'Separado'  },
              { value: "Viudo", label: 'Viudo'  },
              { value: "Concubino", label: 'Concubino'  },
            ],
            required: true,
          },
        },

        {
          key: 'Discapacidad',
          type: 'select',
          templateOptions: {
            label: '¿Tiene discapacidad?',
            placeholder: '¿Qué tipo?',
            options: [
              { value: "no", label: 'No'  },
              { value: "Física", label: 'Fisica / Motríz'  },
              { value: "Sensorial", label: 'Sensoral (visual, auditiva o del habla)'  },
              { value: "Mental", label: 'Mental'  },
              { value: "Otra", label: 'Otra'  },
            ],
          },
        },
        {
          key: '¿Posee certificado de discapacidad?',
          type: 'select',
          templateOptions: {
            label: '¿Posee certificado de discapacidad?',
            options: [
              { value: "no", label: 'No'  },
              { value: "si", label: 'Si'  },
            ],
          },
        },
        {
          key: 'Asiste Establecimiento Educativo',
          type: 'select',
          templateOptions: {
            label: '¿Asiste a establecimiento Educativo?',
            options: [
              { value: "no", label: 'No'  },
              { value: "si", label: 'Si'  },
            ],
          },
        },
        {
          key: 'Nivel educativo alcanzado',
          type: 'select',
          templateOptions: {
            label: 'Nivel alcanzado',
            placeholder: 'Nivel educacion',
            options: [
              { value: "ninguno", label: 'Ninguno'  },
              { value: "jardin", label: 'Jardín'  },
              { value: "preescolar", label: 'Preescolar'  },
              { value: "primario inc", label: 'Primario Incompleto'  },
              { value: "primario comp", label: 'Primario Completo'  },
              { value: "secundario inc", label: 'Secundario Incompleto'  },
              { value: "secundario comp", label: 'Secundario Completo'  },
              { value: "terciario inc", label: 'Terciario Incompleto'  },
              { value: "terciario comp", label: 'Terciario Completo'  },
              { value: "universitario inc", label: 'Universitario Incompleto'  },
              { value: "Universitario comp", label: 'Universitario Completo'  },
            ],
          },
        },
        {
          className: 'datos-domiciliarios',
          template: '<div><h2>Datos domiciliarios:</h2></div>',
        },
        {
          key: 'Calle',
          type: 'input',
          templateOptions: {
            label: 'Calle',
            placeholder: 'Direccion',
            required: true,
          },
        },
        {
          key: 'Número',
          type: 'input',
          templateOptions: {
            label: 'Número',
            placeholder: 'Número',
            required: true,
            pattern: "\\d{1,5}",
          },
        },
        {
          key: 'Torre',
          type: 'input',
          templateOptions: {
            label: 'Torre',
            placeholder: 'Torre',
          },
        },
        {
          key: 'Piso',
          type: 'input',
          templateOptions: {
            label: 'Piso',
            placeholder: 'Piso',
            pattern: "\\d{1,2}",
          },
        },
        {
          key: 'Depto',
          type: 'input',
          templateOptions: {
            label: 'Depto',
            placeholder: 'Depto',
          },
        },
        {
          key: 'Manzana',
          type: 'input',
          templateOptions: {
            label: 'Manzana',
            placeholder: 'Manzana',
          },
        },
        {
          key: 'Barrio',
          type: 'input',
          templateOptions: {
            label: 'Barrio',
            placeholder: 'Barrio',
            required: true,
          },
        },
        {
          key: 'Departamento',
          type: 'select',
          templateOptions: {
            label: 'Departamento',
            placeholder: 'Placeholder',
            description: 'Departamento',
            required: true,
            options: [
              { value: 'CAPITAL', label:'CAPITAL'  },
              { value: 'CALAMUCHITA', label:'CALAMUCHITA'  },
              { value: 'COLON', label:'COLON'  },
              { value: 'CRUZ DEL EJE', label:'CRUZ DEL EJE'  },
              { value: 'GENERAL ROCA', label:'GENERAL ROCA'  },
              { value: 'GRAL SAN MARTIN', label:'GRAL SAN MARTIN'  },
              { value: 'ISCHILIN', label:'ISCHILIN'  },
              { value: 'JUAREZ CELMAN', label:'JUAREZ CELMAN'  },
              { value: 'MARCOS JUAREZ', label:'MARCOS JUAREZ'  },
              { value: 'MINAS', label:'MINAS'  },
              { value: 'POCHO', label:'POCHO'  },
              { value: 'PUNILLA', label:'PUNILLA'  },
              { value: 'RIO CUARTO', label:'RIO CUARTO'  },
              { value: 'RIO PRIMERO', label:'RIO PRIMERO'  },
              { value: 'RIO SECO', label:'RIO SECO'  },
              { value: 'RIO SEGUNDO', label:'RIO SEGUNDO'  },
              { value: 'ROQUE SAENZ PEÑA', label:'ROQUE SAENZ PEÑA'  },
              { value: 'SAN ALBERTO', label:'SAN ALBERTO'  },
              { value: 'SAN JAVIER', label:'SAN JAVIER'  },
              { value: 'SAN JUSTO', label:'SAN JUSTO'  },
              { value: 'SANTA MARIA', label:'SANTA MARIA'  },
              { value: 'SOBREMONTE', label:'SOBREMONTE'  },
              { value: 'TERCERO ARRIBA', label:'TERCERO ARRIBA'  },
              { value: 'TOTORAL', label:'TOTORAL'  },
              { value: 'TULUMBA', label:'TULUMBA'  },
              { value: 'UNION', label:'UNION'  },
            ],
          },
        },
        {
          key: 'Localidad',
          type: 'input',
          templateOptions: {
            label: 'Localidad',
            placeholder: 'Localidad',
            required: true,
          },
        },
        {
          key: 'Código Postal',
          type: 'input',
          templateOptions: {
            pattern: "\\d{1,10}",
            label: 'C.P.',
            placeholder: 'CP',
            required: true,
          },
        },
        {
          className: 'datos-contacto',
          template: '<div><h2>Datos de contacto:</h2></div>',
        },
        {
          key: 'Email',
          type: 'input',
          templateOptions: {
            label: 'Email',
            placeholder: 'Ingrese Email',
            required: true,
          },
        },
        {
          key: 'Teléfono de contacto',
          type: 'input',
          templateOptions: {
            label: 'Teléfono de contacto',
            placeholder: 'Ingrese teléfono de contacto',
            required: true,
            pattern: "\\d{1,25}",
          },
        },
        {
          key: 'Teléfono alternativo',
          type: 'input',
          templateOptions: {
            pattern: "\\d{1,25}",
            label: 'Teléfono alternativo',
            placeholder: 'Ingrese teléfono alternativo',
          },
        },
        {
          className: 'section-label',
          template: '<div><h2>Datos laborales:</h2></div>',
        },
        {
          key: '¿Trabaja actualmente?',
          type: 'select',
          templateOptions: {
            label: '¿Trabaja actualmente?',
            options: [
              { value: 'Si', label: 'Si' },
              { value: 'No', label: 'No' },
            ],
          },
        },
        {
          key: 'Condición laboral',
          type: 'select',
          templateOptions: {
            label: 'Condición Laboral',
            options: [
              { value: "patron o empleador", label: 'Patrón o Empleador'  },
              { value: "por cuenta propia", label: 'Por cuenta propia'  },
              { value: "obrero o empleado", label: 'Obrero o empleado'  },
              { value: "servicio domestico", label: 'Servicio doméstico'  },
              { value: "jubilado o pensionado", label: 'Jubilado o Pensionado'  },
              { value: "benef de prog de empleo", label: 'Beneficiario de Programa de Empleo'  },
              { value: "asignacion universal por hijo", label: 'Asignación Universal por hijo'  },
              { value: "benef de otros prog sociales", label: 'Beneficiario de otros Programas Sociales'  },
            ],
          },
        },
        {
          key: 'Actividad que realiza',
          type: 'input',
          templateOptions: {
            label: 'Actividad que realiza',
            placeholder: 'Ingrese actividad que realiza',
          },
        },
        {
          key: 'Profesión/Oficio',
          type: 'input',
          templateOptions: {
            label: 'Profesión/Oficio',
            placeholder: 'Una profesión u oficio.',
          },
        },
        {
          className: 'datos-patrimonio',
          template: '<div><h2>Datos del patrimonio del solicitante</h2></div>',
        },
        {
          key: '¿Dispone de alguna casa o inmueble?',
          type: 'select',
          templateOptions:{
            label: '¿Dispone de alguna casa o inmueble?',
            required: true,
            options:[
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: '¿Qué valor estima que tiene?',
          type: 'input',
          defaultValue: '0',
          templateOptions:{
            label: '¿Qué valor estima que tiene?',
            pattern: "\\d{1,25}",
            placeholder: 'Ingrese un monto',
          }
        },
        {
          key: '¿Dispone de algún vehiculo?',
          type: 'select',
          templateOptions:{
            label: '¿Dispone de alguna casa o inmueble?',
            required: true,
            options:[
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: '¿Cuántos?',
          type: 'input',
          templateOptions:{
            label: '¿Cuántos?',
            pattern: "\\d{1,3}",
            placeholder: 'Ingrese un valor',
          }
        },
        {
          key: '¿Modelos?',
          type: 'input',
          templateOptions:{
            label: '¿Modelos?',
            placeholder: 'Ingrese un valor',
          }
        },
        {
          key: 'Estime su valor',
          type: 'input',
          defaultValue: '0',
          templateOptions:{
            label: 'Estime su valor',
            pattern: "\\d{1,25}",
            placeholder: 'Ingrese un monto',
          }
        },
        {
          key: 'Total',
          type: 'input',
          templateOptions:{
            label: 'Total',
            pattern: "\\d{1,25}",
            placeholder: 'Ingrese un monto',
          }
        },
      ],
    },
  },

 //--------------------------------------------------------------------------------------------------------

  {
    className: 'datos-empresa',
    template: '<div><h2>Datos de la empresa:</h2></div>',
  },

  {
    key: 'Empresa',
    type: 'no repeat',
    templateOptions: {
      addText: 'Ingresar datos de la empresa',
    },
    fieldArray: {
      fieldGroup: [
        {
          key: 'Calle',
          type: 'input',
          templateOptions: {
            label: 'Calle',
            placeholder: 'Direccion',
            required: true,
          },
        },
        {
          key: 'Número',
          type: 'input',
          templateOptions: {
            label: 'Número',
            placeholder: 'Número',
            required: true,
            pattern: "\\d{1,5}",
          },
        },
        {
          key: 'Torre',
          type: 'input',
          templateOptions: {
            label: 'Torre',
            placeholder: 'Torre',
          },
        },
        {
          key: 'Piso',
          type: 'input',
          templateOptions: {
            label: 'Piso',
            placeholder: 'Piso',
            pattern: "\\d{1,2}",
          },
        },
        {
          key: 'Depto',
          type: 'input',
          templateOptions: {
            label: 'Depto',
            placeholder: 'Depto',
          },
        },
        {
          key: 'Manzana',
          type: 'input',
          templateOptions: {
            label: 'Manzana',
            placeholder: 'Manzana',
          },
        },
        {
          key: 'Barrio',
          type: 'input',
          templateOptions: {
            label: 'Barrio',
            placeholder: 'Barrio',
            required: true,
          },
        },
        {
          key: 'Departamento',
          type: 'select',
          templateOptions: {
            label: 'Departamento',
            placeholder: 'Placeholder',
            description: 'Departamento',
            required: true,
            options: [
              { value: 'CAPITAL', label:'CAPITAL'  },
              { value: 'CALAMUCHITA', label:'CALAMUCHITA'  },
              { value: 'COLON', label:'COLON'  },
              { value: 'CRUZ DEL EJE', label:'CRUZ DEL EJE'  },
              { value: 'GENERAL ROCA', label:'GENERAL ROCA'  },
              { value: 'GRAL SAN MARTIN', label:'GRAL SAN MARTIN'  },
              { value: 'ISCHILIN', label:'ISCHILIN'  },
              { value: 'JUAREZ CELMAN', label:'JUAREZ CELMAN'  },
              { value: 'MARCOS JUAREZ', label:'MARCOS JUAREZ'  },
              { value: 'MINAS', label:'MINAS'  },
              { value: 'POCHO', label:'POCHO'  },
              { value: 'PUNILLA', label:'PUNILLA'  },
              { value: 'RIO CUARTO', label:'RIO CUARTO'  },
              { value: 'RIO PRIMERO', label:'RIO PRIMERO'  },
              { value: 'RIO SECO', label:'RIO SECO'  },
              { value: 'RIO SEGUNDO', label:'RIO SEGUNDO'  },
              { value: 'ROQUE SAENZ PEÑA', label:'ROQUE SAENZ PEÑA'  },
              { value: 'SAN ALBERTO', label:'SAN ALBERTO'  },
              { value: 'SAN JAVIER', label:'SAN JAVIER'  },
              { value: 'SAN JUSTO', label:'SAN JUSTO'  },
              { value: 'SANTA MARIA', label:'SANTA MARIA'  },
              { value: 'SOBREMONTE', label:'SOBREMONTE'  },
              { value: 'TERCERO ARRIBA', label:'TERCERO ARRIBA'  },
              { value: 'TOTORAL', label:'TOTORAL'  },
              { value: 'TULUMBA', label:'TULUMBA'  },
              { value: 'UNION', label:'UNION'  },
            ],
          },
        },
        {
          key: 'Localidad',
          type: 'input',
          templateOptions: {
            label: 'Localidad',
            placeholder: 'Localidad',
            required: true,
          },
        },
        {
          key: 'Código Postal',
          type: 'input',
          templateOptions: {
            pattern: "\\d{1,10}",
            label: 'C.P.',
            placeholder: 'CP',
            required: true,
          },
        },
        {
          key: 'Teléfono',
          type: 'input',
          templateOptions: {
            label: 'Teléfono',
            placeholder: 'Ingrese teléfono de contacto',
            required: true,
            pattern: "\\d{1,25}",
          },
        },
        {
          key: 'Email',
          type: 'input',
          templateOptions: {
            label: 'Email',
            placeholder: 'Ingrese Email',
            required: true,
          },
        },
        {
          key: 'Tipo de inmueble',
          type: 'select',
          templateOptions: {
            label: 'Tipo de inmueble',
            placeholder: 'Placeholder',
            required: true,
            options: [
              { value: "Propio", label: 'Propio'  },
              { value: "Alquilado", label: 'Alquilado'  },
              { value: "Prestado", label: 'Prestado'  },
            ],
          },
        },
        {
          key: 'Actividad del microemprendimiento',
          type: 'input',
          templateOptions: {
            label: '¿Cuál es la actividad del microemprendimiento?',
            placeholder: 'Ingrese una actividad',
            required: true,
          }
        },
        {
          key: 'El emprendimiento es',
          type: 'select',
          templateOptions: {
            required: true,
            label: 'El emprendimiento es:',
            options: [
              {value: 'Unipersonal', label: 'Unipersonal'},
              {value: 'Familiar', label: 'Familiar'},
              {value: 'Grupal', label: 'Grupal'},
            ]
          }
        },
        {
          key: 'Tipo de proyecto',
          type: 'select',
          templateOptions: {
            label: 'Tipo de proyecto',
            required: true,
            options: [
              { value: 'A iniciar', label: 'A iniciar'},
              { value: 'En marcha', label: 'En marcha'},
              { value: 'Reactivación', label: 'Reactivación'},
              { value: 'Reconversión', label: 'Reconversión'},
              { value: 'Otro', label: 'Otro'},
            ],
          }
        },
        {
          key: 'Proyecto activo a partir de',
          type: 'input',
          templateOptions: {
            required: true,
            type: 'date',
            label: 'Proyecto activo desde/a partir de',
          }
        },
        {
          key: 'Actividad del microemprendimiento',
          type: 'input',
          templateOptions: {
            label: '¿Cuál es la actividad del microemprendimiento?',
            placeholder: 'Ingrese una actividad',
            required: true,
          }
        },
        {
          key: 'Sector en el que se desarrolla la actividad',
          type: 'select',
          templateOptions: {
            label: 'Sector en el que se desarrolla la actividad',
            required: true,
            options: [
              { value: 'Producción de bienes', label: 'Producción de bienes'},
              { value: 'Comercio', label: 'Comercio'},
              { value: 'Servicio', label: 'Servicio'},
              { value: 'Agropeciario', label: 'Agropecuario'},
              { value: 'Artesanías', label: 'Artesanías'},
              { value: 'Otro', label: 'Otro'},
            ],
          }
        },
        {
          key: 'Posee experiencia',
          type: 'select',
          templateOptions: {
            options: [
              { value: 'Si', label: 'Si'},
              { value: 'No', label: 'No'},
            ],
            label: '¿Posee experiencia previa en la actividad a desarrollar?',
            required: true,
          }
        },
        {
          key: '¿Cuánto tiempo?',
          type: 'input',
          templateOptions: {
            label: '¿Cuánto tiempo?',
            placeholder: 'Ingrese un tiempo',
          }
        },
        {
          key: '¿Ha realizado cursos de capacitación relacionados con la temática del proyecto?',
          type: 'select',
          templateOptions: {
            required: true,
            label: '¿Ha realizado cursos de capacitación relacionados con la temática del proyecto?',
            options: [
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ],
          }
        },
        {
          key: '¿Qué curso o capacitación le gustaría realizar?',
          type: 'input',
          templateOptions: {
            required: true,
            label: '¿Qué curso o capacitación le gustaría realizar?',
          }
        },
        {
          key: '¿Pidió alguna vez un crédito para un microemprendimiento?',
          type: 'select',
          templateOptions: {
            required: true,
            label: '¿Pidió alguna vez un crédito para un microemprendimiento?',
            options: [
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: '¿Se lo otorgaron?',
          type: 'select',
          templateOptions: {
            label: '¿Se lo otorgaron?',
            options: [
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: '¿En que situación lo solicitó?',
          type: 'input',
          templateOptions: {
            label: '¿En que situación lo solicitó?'
          }
        }
      ]
    }
  },

  //--------------------------------------------------------------------------------------------------------

  {
    className: 'datos-grupo-familiar',
    template: '<div><h2>Datos del Grupo Conviviente:</h2></div>',
  },
 
  {
    key: 'Grupo Conviviente',
    type: 'repeat',
    templateOptions: {
      addText: 'Ingresar persona del grupo familiar',
    },
    fieldArray: {
    fieldGroup: [
      {
        type: 'input',
        key: 'Nombres',
        templateOptions: {
          label: 'Nombre del integrante:',
        },
      },
          {
            type: 'input',
            key: 'Apellido',
            templateOptions: {
              label: 'Apellido del integrante:',
            },
          },
          {
            key: 'DNI',
            type: 'input',
            templateOptions: {
              pattern: "\\d{7,8}",
              label: 'DNI',
              placeholder: 'Su Dni',
            },
          },
          {
            key: 'Fecha de nacimiento integrante grupo',
            type: 'input',
            templateOptions: {
              type: 'date',
              label: 'Fecha de nacimiento',
              placeholder: 'Fecha de nacimiento dd/mm/aaaa',
            },
          },
          {
            key: 'Estado civíl',
            type: 'select',
            templateOptions: {
              label: 'Estado Civil',
              placeholder: 'Placeholder',
              options: [
                { value: "Soltero", label: 'Soltero'  },
                { value: "Casado", label: 'Casado'  },
                { value: "Divorciado", label: 'Divorciado'  },
                { value: "Separado", label: 'Separado'  },
                { value: "Viudo", label: 'Viudo'  },
                { value: "Concubino", label: 'Concubino'  },
              ],
            },
          },
          {
            key: 'Vínculo',
            type: 'select',
            templateOptions: {
              label: 'Vinculo',
              placeholder: 'Vinculo',
              options: [
                { value: "Conyugue", label: 'Conyugue/Concubino'  },
                { value: "Hijo", label: 'Hijo/a'  },
                { value: "Padre-madre", label: 'Padre/Madre'  },
                { value: "Nieto", label: 'Nieto/a'  },
                { value: "Hermano", label: 'Hermano/a'  },
                { value: "Suegro", label: 'Suegro/a'  },
                { value: "Cunado", label: 'Cuñado/a'  },
                { value: "Sobrino", label: 'Sobrino/a'  },
                { value: "Otros", label: 'Otros'  },
              ],
            },
          },
          {
            key: 'Sexo',
            type: 'select',
            templateOptions: {
              label: 'Sexo',
              placeholder: 'Sexo',
              options: [
                { value: "masculino", label: 'Masculino'  },
                { value: "femenino", label: 'Femenino'  },
              ],
            },
          },
          {
            key: 'Discapacidad',
            type: 'select',
            templateOptions: {
              label: '¿Tiene discapacidad?',
              placeholder: '¿Qué tipo?',
              options: [
                { value: "no", label: 'No'  },
                { value: "Física", label: 'Fisica / Motríz'  },
                { value: "Sensorial", label: 'Sensoral (visual, auditiva o del habla)'  },
                { value: "Mental", label: 'Mental'  },
                { value: "Otra", label: 'Otra'  },
              ],
            },
          },
          {
            key: '¿Posee certificado de discapacidad?',
            type: 'select',
            templateOptions: {
              label: '¿Posee certificado de discapacidad?',
              options: [
                { value: "no", label: 'No'  },
                { value: "si", label: 'Si'  },
              ],
            },
          },
          {
            key: 'Asiste Establecimiento Educativo?',
            type: 'select',
            templateOptions: {
              label: '¿Asiste a est. Educativo?',
              options: [
                { value: "no", label: 'No'  },
                { value: "si", label: 'Si'  },
              ],
            },
          },
          {
            key: 'Nivel educativo alcanzado',
            type: 'select',
            templateOptions: {
              label: 'Nivel alcanzado',
              placeholder: 'Nivel educacion',
              options: [
                { value: "ninguno", label: 'Ninguno'  },
                { value: "jardin", label: 'Jardín'  },
                { value: "preescolar", label: 'Preescolar'  },
                { value: "primario inc", label: 'Primario Incompleto'  },
                { value: "primario comp", label: 'Primario Completo'  },
                { value: "secundario inc", label: 'Secundario Incompleto'  },
                { value: "secundario comp", label: 'Secundario Completo'  },
                { value: "terciario inc", label: 'Terciario Incompleto'  },
                { value: "terciario comp", label: 'Terciario Completo'  },
                { value: "universitario inc", label: 'Universitario Incompleto'  },
                { value: "Universitario comp", label: 'Universitario Completo'  },
              ],
            },
          },
          {
            key: '¿Trabaja?',
            type: 'select',
            templateOptions: {
              label: '¿Trabaja?',
              options: [
                { value: "no", label: 'No'  },
                { value: "si", label: 'Si'  },
              ],
            },
          },
          {
            key: 'Condición laboral',
            type: 'select',
            templateOptions: {
              label: 'Condición Laboral',
              options: [
                { value: "patron o empleador", label: 'Patrón o Empleador'  },
                { value: "por cuenta propia", label: 'Por cuenta propia'  },
                { value: "obrero o empleado", label: 'Obrero o empleado'  },
                { value: "servicio domestico", label: 'Servicio doméstico'  },
                { value: "jubilado o pensionado", label: 'Jubilado o Pensionado'  },
                { value: "benef de prog de empleo", label: 'Beneficiario de Programa de Empleo'  },
                { value: "asignacion universal por hijo", label: 'Asignación Universal por hijo'  },
                { value: "benef de otros prog sociales", label: 'Beneficiario de otros Programas Sociales'  },
              ],
            },
          },
          {
            key: 'Edad',
            type: 'input',
            templateOptions: {
              label: 'Edad',
              placeholder: 'Edad',
              minLength: 1,
              maxLength: 3,
            },
          },
          {
            key: 'A cargo del titular',
            type: 'select',
            templateOptions: {
              label: '¿Está a cargo del Titular?',
              options: [
                { value: "no", label: 'No'  },
                { value: "si", label: 'Si'  },
              ],
            },
          },
          {
            key: 'Ingresos mensuales',
            type: 'input',
            templateOptions: {
              label: 'ingresos mensuales',
              placeholder: 'Ingresos mensuales',
            },
          },
        ],
      },
    },


//-------------------------------------------------------------------------------------------------------

  {
    className: 'datos-ingresos-y-gastos',
    template: '<div><h2>Datos ingresos y gastos:</h2></div>',
  },

  {
    key: 'Ingresos y gastos',
    type: 'no repeat',
    templateOptions: {
      addText: 'Ingresos y Gastos:',
    },
    fieldArray: {
      fieldGroup: [
        {
          className: 'datos-ingresos',
          template: '<div><h2>Datos de Ingresos:</h2></div>',
        },
        {
          key: 'Ingresos por el emprendimiento',
          type: 'input',
          defaultValue: '0',
          templateOptions:{
            required: true,
            placeholder: 'Ingrese un monto',
            label: 'Ingresos por el emprendimiento',
            pattern: "\\d{1,25}",
          }
        },
        {
          key: 'Otros (Rentas, jubilaciónes, etc)',
          type: 'input',
          defaultValue: '0',
          templateOptions:{
            placeholder: 'Ingrese un monto',
            label: 'Otros (Rentas, jubilaciónes, etc)',
            pattern: "\\d{1,25}",
          }
        },
        {
          key: 'Ingreso total del grupo familiar del hogar',
          type: 'input',
          defaultValue: '0',
          templateOptions:{
            required: true,
            placeholder: 'Ingrese un monto',
            label: 'Ingreso total del grupo familiar del hogar',
            pattern: "\\d{1,25}",
          }
        },
        {
          key: 'Total ingresos',
          type: 'input',
          defaultValue: '0',
          templateOptions:{
            required: true,
            placeholder: 'Ingrese un monto',
            label: 'Total ingresos',
            pattern: "\\d{1,25}",
          }
        },
        {
          className: 'datos-gastos',
          template: '<div><h2>Datos de Gastos:</h2></div>',
        },
        {
          key: 'Alimentos',
          type: 'input',
          defaultValue: '0',
          templateOptions:{
            label: 'Alimentos',
            placeholder: 'Ingrese un monto',
            pattern: "\\d{1,25}",
          }
        },
        {
          key: 'Alquiler',
          type: 'input',
          defaultValue: '0',
          templateOptions:{
            label: 'Alquiler',
            placeholder: 'Ingrese un monto',
            pattern: "\\d{1,25}",
          }
        },
        {
          key: 'Impuestos (Municipal, Provincial, Nacional)',
          type: 'input',
          defaultValue: '0',
          templateOptions:{
            label: 'Impuestos (Municipal, Provincial, Nacional)',
            placeholder: 'Ingrese un monto',
            required: true,
            pattern: "\\d{1,25}",
          }
        },
        {
          key: 'Servicios (Luz, Agua, Gas, Teléfono)',
          type: 'input',
          defaultValue: '0',
          templateOptions:{
            label: 'Servicios (Luz, Agua, Gas, Teléfono)',
            placeholder: 'Ingrese un monto',
            required: true,
            pattern: "\\d{1,25}",
          }
        },
        {
          key: 'Créditos (bancos, Financieras, Electrodomésticos)',
          type: 'input',
          defaultValue: '0',
          templateOptions:{
            label: 'Créditos (bancos, Financieras, Electrodomésticos)',
            placeholder: 'Ingrese un monto',
            pattern: "\\d{1,25}",
          }
        },
        {
          key: 'Movilidad (Transporte, Combustible)',
          type: 'input',
          defaultValue: '0',
          templateOptions:{
            label: 'Movilidad (Transporte, Combustible)',
            placeholder: 'Ingrese un monto',
            pattern: "\\d{1,25}",
          }
        },
        {
          key: 'Otros (Educación, Salud, Vestimenta, Recreación)',
          type: 'input',
          defaultValue: '0',
          templateOptions:{
            label: 'Otros (Educación, Salud, Vestimenta, Recreación)',
            placeholder: 'Ingrese un monto',
            pattern: "\\d{1,25}",
          }
        },
        {
          key: 'Total Gastos',
          type: 'input',
          defaultValue: '0',
          templateOptions:{
            label: 'Total Gastos',
            placeholder: 'Ingrese un monto',
            pattern: "\\d{1,25}",
          }
        },
        {
          key: 'Capacidad de ahorro total',
          type: 'input',
          defaultValue: '0',
          templateOptions:{
            label: 'Capacidad de ahorro total (total ingresos) - (total gastos)',
            placeholder: 'Ingrese un monto',
            pattern: "\\d{1,25}",
          }
        }
      ],
    }
  },
 
  //--------------------------------------------------------------------------------------------------------
  {
    className: 'datos-organizacion',
    template: '<div><h2>Miembros de la Organización</h2></div>',
  },
  {
    key: 'Grupo Conviviente',
    type: 'repeat',
    templateOptions: {
      addText: 'Ingresar miembro de la organización',
    },
    fieldArray: {
      fieldGroup: [
        {
          key: 'Apellido y Nombre',
          type: 'input',
          templateOptions: {
            label: 'Apellido y nombre',
            required: true,
            placeholder: 'Ingrese un Nombre y un Apellido',
          }
        },
        {
          key: 'Relación con el solicitante',
          type: 'input',
          templateOptions: {
            label: 'Relación con el solicitante',
            required: true,
            placeholder: 'Ingrese una relación',
          }
        },
        {
          key: 'Edad',
          type: 'input',
          templateOptions: {
            label: 'Edad',
            required: true,
            pattern: '\\d{2,3}',
            placeholder: 'Ingrese una edad',
          }
        },
        {
          key: 'Tarea a desarrollar en el emprendimiento',
          type: 'input',
          templateOptions: {
            label: 'Tarea (A desarrollar en el emprendimiento)',
            required: true,
            placeholder: 'Ingrese una tarea',
          }
        },
        {
          key: 'Horario de trabajo',
          type: 'input',
          templateOptions: {
            label: 'Horario de trabajo (A desarrollar en el emprendimiento)',
            required: true,
            placeholder: 'Ingrese un horario',
          }
        },
        {
          key: 'Sueldo o remuneración',
          type: 'input',
          templateOptions: {
            label: 'Sueldo o remuneración',
            required: true,
            pattern: '\\d{1,25}',
            placeholder: 'Ingrese un sueldo o remuneración',
          }
        },
        {
          key: 'Antecedentes laborales',
          type: 'select',
          templateOptions: {
            label: 'Antecedentes laborales',
            required: true,
            options: [
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ],
          }
        }
      ]
    }
  },
//--------------------------------------------------------------------------------------------------------
  {
    className: 'datos-mercado-comercializacion',
    template: '<div><h2>Datos del Mercado y la Comercialización</h2></div>',
  },
  {
    key: 'Mercado y comercialización',
    type: 'no repeat',
    templateOptions: {
      addText: 'Mercado y comercialización:',
    },
    fieldArray: {
      fieldGroup: [
        {
          key: '¿Dónde vende?',
          type: 'select',
          templateOptions:{
            label: 'Dónde vende?',
            required: true,
            options:[
              {value: 'En local establecido', label: 'En local establecido'},
              {value: 'En forma ambulante', label: 'En forma ambulante'},
              {value: 'En puesto fijo en la calle', label: 'En puesto fijo en la calle'},
              {value: 'En ferias', label: 'En ferias'},
              {value: 'Distribución a domicilio', label: 'Distribución a domicilio'},
              {value: 'Otros', label: 'Otros'},
            ],
          }
        },
        {
          key: '¿Cómo realiza su ventas o producciónes?',
          type: 'select',
          templateOptions:{
            label: '¿Cómo realiza su ventas o producciónes?',
            required: true,
            options:[
              {value: 'Sólo produce y vende a pedido del cliente', label: 'Sólo produce y vende a pedido del cliente'},
              {value: 'A pedido del cliente y ofertando sus productos a otros', label: 'A pedido del cliente y ofertando sus productos a otros'},
              {value: 'Ofertando sus productos sin pedido previo', label: 'Ofertando sus productos sin pedido previo'},
            ],
          }
        },
        {
          key: '¿Cómo fija los precios de venta?',
          type: 'select',
          templateOptions:{
            label: '¿Cómo fija los precios de venta?',
            required: true,
            options:[
              {value: 'De acuerdo al precio de otros colegas', label: 'De acuerdo al precio de otros colegas'},
              {value: 'De acuerdo al costo más un margen de ganancia', label: 'De acuerdo al costo más un margen de ganancia'},
              {value: 'Según quién sea el cliente considerando mis costos', label: 'Según quién sea al cliente considerando mis costos'},
              {value: 'Según quién sea el cliente sin considerar mis costos', label: 'Según quién sea el cliente sin considerar mis costos'},
              {value: 'El cliente fija mi precio de venta', label: 'El cliente fija mi precio de venta'},
              {value: 'Otros', label: 'Otros'},
            ],
          }
        },
        {
          key: '¿Puede estimar la cantidad de clientes que tiene?',
          type: 'select',
          templateOptions:{
            required: true,
            label: '¿Puede estimar la cantidad de clientes que tiene?',
            options: [
              {value: 'Si', label: 'Si'},
              {value: 'No', label: 'No'},
            ]
          }
        },
        {
          key: '¿Cuántos son?',
          type: 'input',
          templateOptions:{
            label: '¿Cuántos son?',
            placeholder: 'Ingrese una cantidad',
            pattern: '\\d{1,4}',
          }
        },
        {
          key: '¿Cómo compra habitualmente?',
          type: 'select',
          templateOptions:{
            label: '¿Cómo compra habitualmente?',
            required: true,
            options: [
              {value: 'Cada vez que necesita (No tiene stock)', label: 'Cada vez que necesita (No tiene stock)'},
              {value: 'Cada semana', label: 'Cada semana'},
              {value: 'Cada mes', label: 'Cada mes'},
              {value: 'Cada cierto tiempo', label: 'Cada cierto tiempo'},
              {value: 'Cada vez que hay una oferta', label: 'Cada vez que hay una oferta'},
            ]
          }
        },
        {
          className: 'datos-pago-compra-venta',
          template: '<div><h2>Formas de pago de las compras y ventas</h2><h3>Forma de pago de las compras</h3></div>',
        },
        {
          key: 'Porcentaje efectivo (compra)',
          type: 'input',
          templateOptions:{
            label: 'El ___% es en efectivo',
            pattern: '\\d{1,3}'
          }
        },
        {
          key: 'Porcentaje crédito proveedores (compra)',
          type: 'input',
          templateOptions:{
            label: 'El ___% es crédito de proveedores',
            pattern: '\\d{1,3}'
          }
        },
        {
          key: 'Plazo de pago promedio a x días (compra)',
          type: 'input',
          templateOptions:{
            label: 'Plazo de pago promedio a __ días',
            pattern: '\\d{1,3}',
            placeholder: 'Ingrese una cantidad de días'
          }
        },
        {
          key: 'Porcentaje con otra forma de pago (compra)',
          type: 'input',
          templateOptions:{
            label: 'El ___% con otra forma de pago',
            pattern: '\\d{1,3}'
          }
        },
        {
          key: 'Plazo de pago promedio a x días otra forma de pago (compra)',
          type: 'input',
          templateOptions:{
            label: 'Plazo de pago promedio a __ días',
            pattern: '\\d{1,3}',
            placeholder: 'Ingrese una cantidad de días'
          }
        },
        {
          className: 'datos-pago-ventas',
          template: '<div><h3>Forma de pago de las ventas</h3></div>',
        },
        {
          key: 'Porcentaje efectivo (pago)',
          type: 'input',
          templateOptions:{
            label: 'El ___% es en efectivo',
            pattern: '\\d{1,3}'
          }
        },
        {
          key: 'Porcentaje crédito proveedores (pago)',
          type: 'input',
          templateOptions:{
            label: 'El ___% es crédito de proveedores',
            pattern: '\\d{1,3}'
          }
        },
        {
          key: 'Plazo de pago promedio a x días (pago)',
          type: 'input',
          templateOptions:{
            label: 'Plazo de pago promedio a __ días',
            pattern: '\\d{1,3}',
            placeholder: 'Ingrese una cantidad de días'
          }
        },
        {
          key: 'Porcentaje con otra forma de pago (pago)',
          type: 'input',
          templateOptions:{
            label: 'El ___% con otra forma de pago',
            pattern: '\\d{1,3}'
          }
        },
        {
          key: 'Plazo de pago promedio a x días otra forma de pago (pago)',
          type: 'input',
          templateOptions:{
            label: 'Plazo de pago promedio a __ días',
            pattern: '\\d{1,3}',
            placeholder: 'Ingrese una cantidad de días'
          }
        },
      ]
    }
  },
//--------------------------------------------------------------------------------------------------------
  {
    className: 'datos-inversion-realizada',
    template: '<div><h2>Inversión realizada (Activo destinado al proyecto):</h2></div>',
  },

  {
    key: 'Inversión realizada',
    type: 'repeat',
    templateOptions: {
      addText: 'Ingresar inversión',
    },
    fieldArray: {
      fieldGroup: [
        {
          className: 'descripcion-inversion',
          template: '<div><h3>Equipos, máquinas, herramientas, metria prima, insumos, movilidad y otros bienes propios que posee actualmente el microemprendimiento.</h3></div>',
        },
        {
          key: 'Descripción',
          type: 'input',
          templateOptions:{
            label: 'Descripción',
            placeholder: 'Ingrese una descripción',
            required: true,
          }
        },
        {
          key: 'Nuevos',
          type: 'input',
          templateOptions:{
            label: 'Nuevos',
            required: true,
            placeholder: 'Ingrese una cantidad',
            pattern: '\\d{1,10}'
          }
        },
        {
          key: 'Usados',
          type: 'input',
          templateOptions:{
            label: 'Usados',
            required: true,
            placeholder: 'Ingrese una cantidad',
            pattern: '\\d{1,10}'
          }
        },
        {
          key: 'Cantidad',
          type: 'input',
          templateOptions:{
            label: 'Cantidad',
            required: true,
            placeholder: 'Ingrese una cantidad',
            pattern: '\\d{1,10}'
          }
        },
        {
          key: 'Precio',
          type: 'input',
          templateOptions:{
            label: 'Precio',
            required: true,
            placeholder: 'Ingrese un precio',
            pattern: '\\d{1,25}',
          }
        },
      ]
    }
  },
  {
    key: 'Monto Total de la inversión realizada',
    type: 'input',
    defaultValue: 'Algun monto',
    templateOptions:{
      label: 'Monto Total de la inversión realizada',
      pattern: '\\d{1,25}',
      placeholder: 'Ingrese una cantidad',
      disabled: true,
    }
  },
//--------------------------------------------------------------------------------------------------------
  {
    className: 'datos-deuda-emprendimiento',
    template: '<div><h2>Deuda del emprendimiento (pasivo):</h2></div>',
  },
  {
    key: 'Deuda del emprendimiento',
    type: 'repeat',
    templateOptions: {
      addText: 'Ingresar Deuda',
    },
    fieldArray: {
      fieldGroup: [
        {
          className: 'descripcion-deuda',
          template: '<div><h3>Detallar si posee actualmente deudas por adquisición de materiale, maquinarias, etc. destinadas al proyecto</h3></div>',
        },
        {
          key: 'Descripción',
          type: 'input',
          templateOptions:{
            label: 'Descripción',
            placeholder: 'Ingrese una descripción',
          }
        },
        {
          key: 'Monto',
          type: 'input',
          templateOptions:{
            label: 'Monto',
            placeholder: 'Ingrese un monto'
          }
        },
      ]
    }
  },
  {
    key: 'Monto Total de la deuda',
    type: 'input',
    defaultValue: 'Un monto',
    templateOptions: {
      label: 'Monto Total de la deuda',
      disabled: true,
    }
  },
//--------------------------------------------------------------------------------------------------------
  {
    className: 'datos-necesidades-inversion',
    template: '<div><h2>Necesidades de inversión:</h2></div>',
  },

  {
    key: 'Necesidades de inversión',
    type: 'repeat',
    templateOptions: {
      addText: 'Ingresar necesidad',
    },
    fieldArray: {
      fieldGroup: [
        {
          className: 'descripcion-necesidad',
          template: '<div><h3>Detallelos equipos, maquinarias, herramientas, materias primas e insumos a adquirir.</h3></div>',
        },
        {
          key: 'Descripción',
          type: 'input',
          templateOptions:{
            label: 'Descripción',
            placeholder: 'Ingrese una descripción',
            required: true,
          }
        },
        {
          key: 'Nuevos',
          type: 'input',
          templateOptions:{
            label: 'Nuevos',
            required: true,
            placeholder: 'Ingrese una cantidad',
            pattern: '\\d{1,10}'
          }
        },
        {
          key: 'Usados',
          type: 'input',
          templateOptions:{
            label: 'Usados',
            required: true,
            placeholder: 'Ingrese una cantidad',
            pattern: '\\d{1,10}'
          }
        },
        {
          key: 'Cantidad',
          type: 'input',
          templateOptions:{
            label: 'Cantidad',
            required: true,
            placeholder: 'Ingrese una cantidad',
            pattern: '\\d{1,10}'
          }
        },
        {
          key: 'Precio',
          type: 'input',
          templateOptions:{
            label: 'Precio',
            required: true,
            placeholder: 'Ingrese un precio',
            pattern: '\\d{1,25}',
          }
        },
      ]
    }
  },
  {
    key: 'Monto Total de la inversión realizada',
    type: 'input',
    defaultValue: 'Algun monto',
    templateOptions:{
      label: 'Monto Total de la inversión realizada',
      pattern: '\\d{1,25}',
      placeholder: 'Ingrese una cantidad',
      disabled: true,
    }
  },
  {
    key: 'A financiar con microprestamo',
    type: 'input',
    templateOptions: {
      label: 'A financiar con micorprestamo',
      placeholder: 'Ingrese un monto',
      pattern: '\\d{1,25}',
    }
  },
  {
    key: 'Aportes del capital propio',
    type: 'input',
    templateOptions: {
      label: 'Aportes del capital propio',
      placeholder: 'Ingrese un monto',
      pattern: '\\d{1,25}',
    }
  },
  {
    key: 'Otra fuente de financiamiento (indique cuál)',
    type: 'input',
    templateOptions: {
      label: 'Otra fuente de financiamiento (indique cuál)',
      placeholder: 'Ingrese un monto',
      pattern: '\\d{1,25}',
    }
  },
  {
    key: '¿Cuál?',
    type: 'input',
    templateOptions: {
      label: '¿Cuál?',
      placeholder: 'Ingrese una fuente',
    }
  },
//--------------------------------------------------------------------------------------------------------
  {
    className: 'datos-precio-venta',
    template: '<div><h2>Determinar el precio de venta de su producto o servicio principal</h2></div>',
  },
  {
    key: 'Unidades estimadas a vender mensualmente',
    type: 'input',
    templateOptions: {
      label: 'Unidades estimadas a vender mensualmente',
      placeholder: 'Ingrese una cantidad',
      required: true,
      pattern: '\\d{1,10}',
    }
  },
  {
    key: '¿Cuál es el producto?',
    type: 'input',
    templateOptions:{
      label: '¿Cuál es el producto?',
      required: true,
      placeholder: 'Ingrese un producto'
    }
  },
  {
    className: 'datos-costos-variables',
    template: '<div><h3>Costos variables</h3></div>',
  },
  {
    key: 'Costos variables',
    type: 'repeat',
    templateOptions: {
      addText: 'Ingresar Costo',
    },
    fieldArray: {
      fieldGroup: [
        {
          key: 'Detalle de materia prima',
          type: 'input',
          templateOptions:{
            label: 'Detalle de materia prima',
            placeholder: 'Ingrese un detalle',
            required: true,
          }
        },
        {
          key: 'Pesos por unidad',
          type: 'input',
          templateOptions:{
            label: 'Pesos por unidad',
            placeholder: 'Ingrese un monto por unidad',
            required: true,
            pattern: '\\d{1,25}',
          }
        },
      ]
    }
  },
  {
    className: 'costos-otros',
    template: '<h3>Otros (por ejemplo embalaje</h3>',
  },
  {
    key: 'Detalle de materia prima',
    type: 'input',
    templateOptions:{
      label: 'Detalle de materia prima',
      placeholder: 'Ingrese un detalle',
      required: true,
    }
  },
  {
    key: 'Pesos por unidad',
    type: 'input',
    templateOptions:{
      label: 'Pesos por unidad',
      placeholder: 'Ingrese un monto por unidad',
      required: true,
      pattern: '\\d{1,25}',
    }
  },
  {
    key: 'Total Costos Variables por unidad (A)',
    type: 'input',
    defaultValue: 'Un valor',
    templateOptions:{
      label: 'Total Costos Variables por unidad (A)',
      placeholder: 'Ingrese un monto por unidad',
      required: true,
      disabled: true,
      pattern: '\\d{1,25}',
    }
  },
  {
    key: 'Costos fijos',
    type: 'repeat',
    templateOptions: {
      addText: 'Ingresar Costo',
    },
    fieldArray: {
      fieldGroup: [
        {
          key: 'Detalle: incluya luz, ga, impuestos, movilidad, couta crédito, etc, vinculados con el emprendimiento',
          type: 'input',
          templateOptions:{
            label: 'Detalle: incluya luz, ga, impuestos, movilidad, couta crédito, etc., vinculados con el emprendimiento',
            placeholder: 'Ingrese un detalle',
            required: true,
          }
        },
        {
          key: 'Pesos por unidad',
          type: 'input',
          templateOptions:{
            label: 'Pesos por unidad',
            placeholder: 'Ingrese un monto por unidad',
            required: true,
            pattern: '\\d{1,25}',
          }
        },
      ]
    }
  },
  {
    key: 'Total Costos Fijos por unidad (B)',
    type: 'input',
    defaultValue: 'Un valor',
    templateOptions:{
      label: 'Total Costos Fijos por unidad (B)',
      placeholder: 'Ingrese un monto por unidad',
      required: true,
      disabled: true,
      pattern: '\\d{1,25}',
    }
  },
  {
    className: 'ganancia-estimada',
    template: '<div><h3>Ganancia estimada mensual (a - b) ingresos (a) menos gastos (b) es igual a ganancia estimada</h3></div>',
  },
  {
    key: 'Total ganancia estimada (A-B)',
    type: 'input',
    defaultValue: 'Un valor',
    templateOptions:{
      label: 'Total ganancia estimada (A-B)',
      placeholder: 'Ingrese un monto por unidad',
      required: true,
      disabled: true,
      pattern: '\\d{1,25}',
    }
  },
//--------------------------------------------------------------------------------------------------------
{
  className: 'datos-cuadro-resultado-estimado-mensual',
  template: '<div><h2>Cuadro de resultado estimado mensual</h2><h3>Ventas - Ingresos mensuales</h3></div>',
},
{
  key: 'Ingresos mensuales',
  type: 'repeat',
  templateOptions: {
    addText: 'Ingresar Ingreso mensual',
  },
  fieldArray: {
    fieldGroup: [
      {
        key: 'Producto y/o servicio a vender',
        type: 'input',
        templateOptions: {
          label: 'Producto y/o servicio a vender',
          placeholder: 'Ingrese un producto y/o servicio a vender',
          required: true,
        }
      },
      {
        key: 'Cantidad de unidades a vender por mes',
        type: 'input',
        templateOptions: {
          label: 'Cantidad de unidades a vender por mes',
          placeholder: 'Ingrese una cantidad',
          required: true,
          pattern: '\\d{1,10}',
        }
      },
      {
        key: 'Precio del producto',
        type: 'input',
        templateOptions: {
          label: 'Precio del producto',
          placeholder: 'Ingrese un precio',
          required: true,
          pattern: '\\d{1,10}',
        }
      },
      {
        key: 'Ingreso Total Mensual',
        type: 'input',
        templateOptions: {
          label: 'Ingreso Total Mensual',
          placeholder: 'Ingrese un ingreso',
          required: true,
          pattern: '\\d{1,10}',
        }
      },
    ]
  }
},
{
  key: 'Suma total de ingresos mensuales (A)',
  type: 'input',
  defaultValue: 'Un valor',
  templateOptions: {
    label: 'Suma total de ingresos mensuales (A)',
    disabled: true,
  }
},
{
  className: 'gastos-mensuales',
  template: '<div><h3>Gastos mensuales</h3></div>',
},
{
  key: 'Gastos mensuales',
  type: 'repeat',
  templateOptions: {
    addText: 'Ingresar un gasto',
  },
  fieldArray: {
    fieldGroup: [
      {
        key: 'Detalle los gastos y costos mensuales para generar y vender sus productos y servicios',
        type: 'input',
        templateOptions: {
          label: 'Detalle los gastos y costos mensuales para generar y vender sus productos y servicios',
          placeholder: 'Ingrese un detalle',
          required: true,
        }
      },
      {
        key: 'Cantidad de unidades a vender por mes',
        type: 'input',
        templateOptions: {
          label: 'Cantidad de unidades a vender por mes',
          placeholder: 'Ingrese una cantidad',
          required: true,
          pattern: '\\d{1,10}',
        }
      },
      {
        key: 'Precio del producto',
        type: 'input',
        templateOptions: {
          label: 'Precio del producto',
          placeholder: 'Ingrese un precio',
          required: true,
          pattern: '\\d{1,10}',
        }
      },
      {
        key: 'Total del gasto/costo',
        type: 'input',
        templateOptions: {
          label: 'Total del gasto/costo',
          placeholder: 'Ingrese un total',
          required: true,
          pattern: '\\d{1,10}',
        }
      },
    ]
  }
},
{
  key: 'Suma total de los gastos mensuales (B)',
  type: 'input',
  defaultValue: 'Un valor',
  templateOptions: {
    label: 'Suma total de gastos mensuales (B)',
    disabled: true,
  }
},
//--------------------------------------------------------------------------------------------------------
    {
      className: 'datos-garante',
      template: '<div><h2>Datos de la persona que Garantiza el Micropréstamo</h2></div>',
    },
    {
    key: 'Garante',
    type: 'no repeat',
    templateOptions: {
      addText: 'Ingresar datos de garante',
    },
    fieldArray: {
      fieldGroup: [

    {
      key: 'Apellido',
      type: 'input',
      templateOptions: {
        label: 'Apellido',
        placeholder: 'Ingrese su apellido',
        required: true,
      },
    },
    {
      key: 'Nombres',
      type: 'input',
      templateOptions: {
        label: 'Nombres',
        placeholder: 'Ingrese sus nombres',
        required: true,
      },
    },
    {
      key: 'DNI',
      type: 'input',
      templateOptions: {
        pattern: "\\d{7,8}",
        label: 'DNI',
        placeholder: 'Su Dni',
        required: true,
      },
    },
    {
      key: 'Calle',
      type: 'input',
      templateOptions: {
        label: 'Calle',
        placeholder: 'Direccion',
        required: true,
      },
    },
    {
      key: 'Número',
      type: 'input',
      templateOptions: {
        pattern: "\\d{1,5}",
        label: 'Número',
        placeholder: 'Número',
        required: true,
      },
    },
    {
      key: 'Torre',
      type: 'input',
      templateOptions: {
        label: 'Torre',
        placeholder: 'Torre',
      },
    },
    {
      key: 'Piso',
      type: 'input',
      templateOptions: {
        pattern: "\\d{1,2}",
        label: 'Piso',
        placeholder: 'Piso',
      },
    },
    {
      key: 'Depto',
      type: 'input',
      templateOptions: {
        label: 'Depto',
        placeholder: 'Depto',
      },
    },
    {
      key: 'Manzana',
      type: 'input',
      templateOptions: {
        label: 'Manzana',
        placeholder: 'Manzana',
      },
    },
    {
      key: 'Casa',
      type: 'input',
      templateOptions: {
        label: 'Casa',
        placeholder: 'Casa',
      },
    },
    {
      key: 'Barrio',
      type: 'input',
      templateOptions: {
        label: 'Barrio',
        placeholder: 'Barrio',
        required: true,
      },
    },
    {
      key: 'Departamento',
      type: 'select',
      templateOptions: {
        label: 'Departamento',
        placeholder: 'Placeholder',
        description: 'Departamento',
        required: true,
        options: [
            { value: 'CAPITAL', label:'CAPITAL'  },
            { value: 'CALAMUCHITA', label:'CALAMUCHITA'  },
            { value: 'COLON', label:'COLON'  },
            { value: 'CRUZ DEL EJE', label:'CRUZ DEL EJE'  },
            { value: 'GENERAL ROCA', label:'GENERAL ROCA'  },
            { value: 'GRAL SAN MARTIN', label:'GRAL SAN MARTIN'  },
            { value: 'ISCHILIN', label:'ISCHILIN'  },
            { value: 'JUAREZ CELMAN', label:'JUAREZ CELMAN'  },
            { value: 'MARCOS JUAREZ', label:'MARCOS JUAREZ'  },
            { value: 'MINAS', label:'MINAS'  },
            { value: 'POCHO', label:'POCHO'  },
            { value: 'PUNILLA', label:'PUNILLA'  },
            { value: 'RIO CUARTO', label:'RIO CUARTO'  },
            { value: 'RIO PRIMERO', label:'RIO PRIMERO'  },
            { value: 'RIO SECO', label:'RIO SECO'  },
            { value: 'RIO SEGUNDO', label:'RIO SEGUNDO'  },
            { value: 'ROQUE SAENZ PEÑA', label:'ROQUE SAENZ PEÑA'  },
            { value: 'SAN ALBERTO', label:'SAN ALBERTO'  },
            { value: 'SAN JAVIER', label:'SAN JAVIER'  },
            { value: 'SAN JUSTO', label:'SAN JUSTO'  },
            { value: 'SANTA MARIA', label:'SANTA MARIA'  },
            { value: 'SOBREMONTE', label:'SOBREMONTE'  },
            { value: 'TERCERO ARRIBA', label:'TERCERO ARRIBA'  },
            { value: 'TOTORAL', label:'TOTORAL'  },
            { value: 'TULUMBA', label:'TULUMBA'  },
            { value: 'UNION', label:'UNION'  },
        ],
      },
    },
    {
      key: 'Localidad',
      type: 'input',
      templateOptions: {
        label: 'Localidad',
        placeholder: 'Localidad',
        required: true,
      },
    },
    {
      key: 'Código Postal',
      type: 'input',
      templateOptions: {
        label: 'C.P.',
        placeholder: 'Ingrese C.P.',
        required: true,
      },
    },
    {
      key: 'Teléfono de contacto',
      type: 'input',
      templateOptions: {
        pattern: "\\d{1,25}",
        label: 'Teléfono',
        placeholder: 'Ingrese teléfono de contacto',
        required: true,
      },
    },
    {
      key: 'Estado civíl',
      type: 'select',
      templateOptions: {
        label: 'Estado Civil',
        options: [
          { value: "Soltero", label: 'Soltero'  },
          { value: "Casado", label: 'Casado'  },
          { value: "Divorciado", label: 'Divorciado'  },
          { value: "Separado", label: 'Separado'  },
          { value: "Viudo", label: 'Viudo'  },
          { value: "Concubino", label: 'Concubino'  },
        ],
      },
    },
    {
      key: 'Fecha de Nacimiento garante',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Fecha de nacimiento',
        placeholder: 'Fecha de nacimiento dd/mm/aaaa',
        required: true,
      },
    },
    {
      key: 'Edad',
      type: 'input',
      templateOptions: {
        label: 'Edad',
        placeholder: 'Edad',
        pattern: '\\d{1,3}',
      },
    },
    {
      key: 'CUIL',
      type: 'input',
      templateOptions: {
        label: 'CUIL',
        placeholder: 'Su CUIL',
        required: true,
        pattern: '\\d{11}',
      },
    },
    {
      key: 'Nacionalidad',
      type: 'input',
      templateOptions: {
        label: 'Nacionalidad',
        placeholder: 'Su Nacionalidad',
        required: true,
      },
    },
    {
      key: 'Vínculo con el solicitante',
      type: 'input',
      templateOptions: {
        label: 'Vínculo con el solicitante',
        placeholder: 'Su vínculo con el solicitante',
        required: true,
      },
    },
    {
      key: 'E-mail',
      type: 'input',
      templateOptions:{
        label: 'E-mail',
        required: true,
        placeholder: 'Ingrese un e-mail'
      }
    },

  ],},},
  {
    key: 'monto solicitado',
    type: 'input',
    defaultValue: '$12000',
    templateOptions: {
      //pattern: "\\d{0,20}",
      label: 'Monto solicitado',
      disabled: true,
      placeholder: 'Monto',
    },
  },
  {
    key: 'cantidad de cuotas',
    type: 'input',
    defaultValue: '20',
    templateOptions: {
      //pattern: "\\d{1,3}",
      label: 'Cantidad de cuotas',
      disabled: true,
      placeholder: 'Cuotas',
    },
  },
  {
    key: 'Monto estimado de cuota',
    type: 'input',
    defaultValue: '$600',
    templateOptions: {
      //pattern: "\\d{0,20}",
      label: 'Monto estimado de cuota',
      disabled: true,
      placeholder: 'Monto',
    },
  },
  
  ]

  

	createPdf() {

  if (this.form.valid) {
    let modelo = Object.entries(this.model);
    //
    var doc = new jsPDF('p','mm','a4');
    //
    var img = new Image();
    img.src = 'assets/cabecera.jpg';
    doc.addImage(img, 'jpg', 0, 0);
    //
    doc.setFont('helvetica')

    let m = 30;
    let y = 10;
    let x = 15;
    let i = 0; //
    //var arr:JSON[];

    for (let seccion of modelo) {

      let arr: any = seccion[1];

      y = y + 6;
      doc.setFontSize(16);
      doc.setTextColor(45);
      doc.text(seccion[0], x, m + y); //nombre seccion
      doc.line(x, m + y + 1, x + 180, m + y + 1);



      for(var j = 0; j < arr.length;j++){
        
        //console.log(reg);
        var res = [];
        var z = 0;
        for(var clave in arr[j]){
          if (y > 240 && x === 110) {
            doc.addPage();
            doc.addImage(img, 'jpg', 0, 0);
            m = 30;
            y = 10;
            x = 15;
          }
          i++;
          if (i % 2 != 0){x = 15; y = y + 12;}
          else {x = 110;}
          doc.setFontSize(10);
          doc.setDrawColor(100);

          res.push([clave, arr[j][clave]]);
          var registro:String[] = [clave, 'algo quee no se paso a string'];
          try {
            registro = res[z]; //paso los valores a string
          } catch (e) {
            console.log(e)
          }
          z++;
          doc.text(registro[1], x, m+y); //valor
          doc.line(x, m + y + 1, x + 90, m + y + 1); // linea horizontal
          doc.setFontSize(8);
          doc.setDrawColor(60);
          doc.text(clave, x, m + y + 5); //key
        }
      }
      i = 0;
      x = 15;
      y = y + 12;
    }
    let nombreArchivo = '00000000000';
    nombreArchivo = this.model['Solicitante'][0]['CUIL'];
      doc.output('dataurlnewwindow');
      doc.save('solicitudCreditoL2' + nombreArchivo + '.pdf');


    } else (error) => {
        console.error('error:', error);
      } 
      if (this.form.invalid) {
        alert("falta completar datos")
      }
  }
}
