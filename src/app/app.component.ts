import { ArrayType, NONE_TYPE } from '@angular/compiler'
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
        required: true,
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
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Apellido',
              placeholder: 'Ingrese su apellido',
              required: true,
            },
          },
          {
            key: 'Nombres',
            type: 'input',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Nombres',
              placeholder: 'Ingrese sus nombres',
              required: true,
            },
          },
          {
            key: 'Sexo',
            type: 'select',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Sexo',
              placeholder: 'Placeholder',
              required: true,
              options: [
                { value: "masculino", label: 'Masculino' },
                { value: "femenino", label: 'Femenino' },
              ],
            },
          },
          {
            key: 'DNI',
            type: 'input',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'DNI',
              placeholder: 'Su Dni',
              required: true,
              pattern: '\\d{7,8}',
              maxLength: 8,
              minLength: 7
            },
          },
          {
            key: 'CUIL',
            type: 'input',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'CUIL',
              placeholder: 'Su CUIL',
              required: true,
              pattern: '\\d{11}',
              maxLength: 11,
              minLength: 11
            },
          },
          {
            key: 'Nacionalidad',
            type: 'input',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Nacionalidad',
              placeholder: 'Su Nacionalidad',
              required: true,
            },
          },
          {
            key: 'Fecha de Nacimiento',
            type: 'input',
            validation: {
              show: true,
            },
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
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Estado Civil',
              placeholder: 'Placeholder',
              options: [
                { value: "Soltero", label: 'Soltero' },
                { value: "Casado", label: 'Casado' },
                { value: "Divorciado", label: 'Divorciado' },
                { value: "Separado", label: 'Separado' },
                { value: "Viudo", label: 'Viudo' },
                { value: "Concubino", label: 'Concubino' },
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
                { value: "no", label: 'No' },
                { value: "Física", label: 'Fisica / Motríz' },
                { value: "Sensorial", label: 'Sensoral (visual, auditiva o del habla)' },
                { value: "Mental", label: 'Mental' },
                { value: "Otra", label: 'Otra' },
              ],
            },
          },
          {
            key: '¿Posee certificado de discapacidad?',
            type: 'select',
            templateOptions: {
              label: '¿Posee certificado de discapacidad?',
              options: [
                { value: "no", label: 'No' },
                { value: "si", label: 'Si' },
              ],
            },
          },
          {
            key: 'Asiste Establecimiento Educativo',
            type: 'select',
            templateOptions: {
              label: '¿Asiste a establecimiento Educativo?',
              options: [
                { value: "no", label: 'No' },
                { value: "si", label: 'Si' },
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
                { value: "ninguno", label: 'Ninguno' },
                { value: "jardin", label: 'Jardín' },
                { value: "preescolar", label: 'Preescolar' },
                { value: "primario inc", label: 'Primario Incompleto' },
                { value: "primario comp", label: 'Primario Completo' },
                { value: "secundario inc", label: 'Secundario Incompleto' },
                { value: "secundario comp", label: 'Secundario Completo' },
                { value: "terciario inc", label: 'Terciario Incompleto' },
                { value: "terciario comp", label: 'Terciario Completo' },
                { value: "universitario inc", label: 'Universitario Incompleto' },
                { value: "Universitario comp", label: 'Universitario Completo' },
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
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Calle',
              placeholder: 'Direccion',
              required: true,
            },
          },
          {
            key: 'Número',
            type: 'input',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Número',
              placeholder: 'Número',
              required: true,
              pattern: "\\d{1,5}",
              maxLength: 5,
              minLength: 1
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
              maxLength: 2,
              minLength: 1
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
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Barrio',
              placeholder: 'Barrio',
              required: true,
            },
          },
          {
            key: 'Departamento',
            type: 'select',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Departamento',
              placeholder: 'Placeholder',
              description: 'Departamento',
              required: true,
              options: [
                { value: 'CAPITAL', label: 'CAPITAL' },
                { value: 'CALAMUCHITA', label: 'CALAMUCHITA' },
                { value: 'COLON', label: 'COLON' },
                { value: 'CRUZ DEL EJE', label: 'CRUZ DEL EJE' },
                { value: 'GENERAL ROCA', label: 'GENERAL ROCA' },
                { value: 'GRAL SAN MARTIN', label: 'GRAL SAN MARTIN' },
                { value: 'ISCHILIN', label: 'ISCHILIN' },
                { value: 'JUAREZ CELMAN', label: 'JUAREZ CELMAN' },
                { value: 'MARCOS JUAREZ', label: 'MARCOS JUAREZ' },
                { value: 'MINAS', label: 'MINAS' },
                { value: 'POCHO', label: 'POCHO' },
                { value: 'PUNILLA', label: 'PUNILLA' },
                { value: 'RIO CUARTO', label: 'RIO CUARTO' },
                { value: 'RIO PRIMERO', label: 'RIO PRIMERO' },
                { value: 'RIO SECO', label: 'RIO SECO' },
                { value: 'RIO SEGUNDO', label: 'RIO SEGUNDO' },
                { value: 'ROQUE SAENZ PEÑA', label: 'ROQUE SAENZ PEÑA' },
                { value: 'SAN ALBERTO', label: 'SAN ALBERTO' },
                { value: 'SAN JAVIER', label: 'SAN JAVIER' },
                { value: 'SAN JUSTO', label: 'SAN JUSTO' },
                { value: 'SANTA MARIA', label: 'SANTA MARIA' },
                { value: 'SOBREMONTE', label: 'SOBREMONTE' },
                { value: 'TERCERO ARRIBA', label: 'TERCERO ARRIBA' },
                { value: 'TOTORAL', label: 'TOTORAL' },
                { value: 'TULUMBA', label: 'TULUMBA' },
                { value: 'UNION', label: 'UNION' },
              ],
            },
          },
          {
            key: 'Localidad',
            type: 'input',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Localidad',
              placeholder: 'Localidad',
              required: true,
            },
          },
          {
            key: 'Código Postal',
            type: 'input',
            validation: {
              show: true,
            },
            templateOptions: {
              pattern: "\\d{1,10}",
              maxLength: 10,
              minLength: 1,
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
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Email',
              placeholder: 'Ingrese Email',
              required: true,
            },
          },
          {
            key: 'Teléfono de contacto',
            type: 'input',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Teléfono de contacto',
              placeholder: 'Ingrese teléfono de contacto',
              required: true,
              pattern: "\\d{1,25}",
              maxLength: 25,
              minLength: 1
            },
          },
          {
            key: 'Teléfono alternativo',
            type: 'input',
            templateOptions: {
              pattern: "\\d{1,25}",
              maxLength: 25,
              minLength: 1,
              label: 'Teléfono alternativo',
              placeholder: 'Ingrese teléfono alternativo',
            },
          },
          {
            className: 'section-label',
            template: '<div><h2>Datos laborales:</h2></div>',
          },
          {
            key: 'Trabaja',
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
                { value: "patron o empleador", label: 'Patrón o Empleador' },
                { value: "por cuenta propia", label: 'Por cuenta propia' },
                { value: "obrero o empleado", label: 'Obrero o empleado' },
                { value: "servicio domestico", label: 'Servicio doméstico' },
                { value: "jubilado o pensionado", label: 'Jubilado o Pensionado' },
                { value: "benef de prog de empleo", label: 'Beneficiario de Programa de Empleo' },
                { value: "asignacion universal por hijo", label: 'Asignación Universal por hijo' },
                { value: "benef de otros prog sociales", label: 'Beneficiario de otros Programas Sociales' },
              ],
            },
            expressionProperties: {
              hide: 'model.Trabaja == "No"',
              show: 'model.Trabaja == "Si"',
            }
          },
          {
            key: 'Actividad que realiza',
            type: 'input',
            templateOptions: {
              label: 'Actividad que realiza',
              placeholder: 'Ingrese actividad que realiza',
            },
            expressionProperties: {
              hide: 'model.Trabaja == "No"',
              show: 'model.Trabaja == "Si"',
            }
          },
          {
            key: 'Profesión/Oficio',
            type: 'input',
            templateOptions: {
              label: 'Profesión/Oficio',
              placeholder: 'Una profesión u oficio.',
            },
            expressionProperties: {
              hide: 'model.Trabaja == "No"',
              show: 'model.Trabaja == "Si"',
            }
          },
          {
            className: 'datos-patrimonio',
            template: '<div><h2>Datos del patrimonio del solicitante</h2></div>',
          },
          {
            key: '¿Dispone de alguna casa o inmueble?',
            type: 'select',
            validation: {
              show: true,
            },
            templateOptions: {
              label: '¿Dispone de alguna casa o inmueble?',
              required: true,
              options: [
                { value: 'Si', label: 'Si' },
                { value: 'No', label: 'No' },
              ]
            }
          },
          {
            key: '¿Qué valor estima que tiene?',
            type: 'input',
            templateOptions: {
              label: '¿Qué valor estima que tiene?',
              pattern: "\\d{1,25}",
              maxLength: 25,
              placeholder: 'Ingrese un monto',
            }
          },
          {
            key: '¿Dispone de algún vehiculo?',
            type: 'select',
            validation: {
              show: true,
            },
            templateOptions: {
              label: '¿Dispone de algún vehiculo?',
              required: true,
              options: [
                { value: 'Si', label: 'Si' },
                { value: 'No', label: 'No' },
              ]
            }
          },
          {
            key: '¿Cuántos?',
            type: 'input',
            templateOptions: {
              label: '¿Cuántos?',
              pattern: "\\d{1,3}",
              maxLength: 3,
              placeholder: 'Ingrese un valor',
            }
          },
          {
            key: 'Años de fabricación',
            type: 'input',
            templateOptions: {
              label: 'Años de fabricación',
              placeholder: 'Ingrese un valor',
            }
          },
          {
            key: 'Estime su valor',
            type: 'input',
            templateOptions: {
              label: 'Estime su valor',
              pattern: "\\d{1,25}",
              maxLength: 25,
              placeholder: 'Ingrese un monto',
            }
          },
          {
            key: 'Total',
            type: 'input',
            templateOptions: {
              label: 'Total',
              pattern: "\\d{1,25}",
              maxLength: 25,
              placeholder: 'Ingrese un monto',
            }
          },
        ],
      },
    },

    //--------------------------------------------------------------------------------------------------------

    {
      className: 'datos-empresa',
      template: '<div><h2>Datos del emprendimiento:</h2></div>',
    },

    {
      key: 'Empresa',
      type: 'no repeat',
      templateOptions: {
        required: true,
        addText: 'Ingresar datos del emprendimiento',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Misma_Direccion',
            type: 'select',
            defaultValue: 'Si',
            templateOptions: {
              label: '¿Es la misma dirección en la que reside?',
              options: [
                { value: 'Si', label: 'Si' },
                { value: 'No', label: 'No' },
              ],
            },
          },
          {
            key: 'Calle',
            type: 'input',
            templateOptions: {
              label: 'Calle',
              placeholder: 'Direccion',
            },
            expressionProperties: {
              hide: 'model.Misma_Direccion == "Si"',
              show: 'model.Misma_Direccion == "No"',
            }
          },
          {
            key: 'Número',
            type: 'input',
            templateOptions: {
              label: 'Número',
              placeholder: 'Número',
              pattern: "\\d{1,5}",
              maxLength: 5,
            },
            expressionProperties: {
              hide: 'model.Misma_Direccion == "Si"',
              show: 'model.Misma_Direccion == "No"',
            }
          },
          {
            key: 'Torre',
            type: 'input',
            templateOptions: {
              label: 'Torre',
              placeholder: 'Torre',
            },
            expressionProperties: {
              hide: 'model.Misma_Direccion == "Si"',
              show: 'model.Misma_Direccion == "No"',
            }
          },
          {
            key: 'Piso',
            type: 'input',
            templateOptions: {
              label: 'Piso',
              placeholder: 'Piso',
              pattern: "\\d{1,2}",
              maxLength: 2,
            },
            expressionProperties: {
              hide: 'model.Misma_Direccion == "Si"',
              show: 'model.Misma_Direccion == "No"',
            }
          },
          {
            key: 'Depto',
            type: 'input',
            templateOptions: {
              label: 'Depto',
              placeholder: 'Depto',
            },
            expressionProperties: {
              hide: 'model.Misma_Direccion == "Si"',
              show: 'model.Misma_Direccion == "No"',
            }
          },
          {
            key: 'Manzana',
            type: 'input',
            templateOptions: {
              label: 'Manzana',
              placeholder: 'Manzana',
            },
            expressionProperties: {
              hide: 'model.Misma_Direccion == "Si"',
              show: 'model.Misma_Direccion == "No"',
            }
          },
          {
            key: 'Barrio',
            type: 'input',
            templateOptions: {
              label: 'Barrio',
              placeholder: 'Barrio',
            },
            expressionProperties: {
              hide: 'model.Misma_Direccion == "Si"',
              show: 'model.Misma_Direccion == "No"',
            }
          },
          {
            key: 'Departamento',
            type: 'select',
            templateOptions: {
              label: 'Departamento',
              placeholder: 'Placeholder',
              description: 'Departamento',
              options: [
                { value: 'CAPITAL', label: 'CAPITAL' },
                { value: 'CALAMUCHITA', label: 'CALAMUCHITA' },
                { value: 'COLON', label: 'COLON' },
                { value: 'CRUZ DEL EJE', label: 'CRUZ DEL EJE' },
                { value: 'GENERAL ROCA', label: 'GENERAL ROCA' },
                { value: 'GRAL SAN MARTIN', label: 'GRAL SAN MARTIN' },
                { value: 'ISCHILIN', label: 'ISCHILIN' },
                { value: 'JUAREZ CELMAN', label: 'JUAREZ CELMAN' },
                { value: 'MARCOS JUAREZ', label: 'MARCOS JUAREZ' },
                { value: 'MINAS', label: 'MINAS' },
                { value: 'POCHO', label: 'POCHO' },
                { value: 'PUNILLA', label: 'PUNILLA' },
                { value: 'RIO CUARTO', label: 'RIO CUARTO' },
                { value: 'RIO PRIMERO', label: 'RIO PRIMERO' },
                { value: 'RIO SECO', label: 'RIO SECO' },
                { value: 'RIO SEGUNDO', label: 'RIO SEGUNDO' },
                { value: 'ROQUE SAENZ PEÑA', label: 'ROQUE SAENZ PEÑA' },
                { value: 'SAN ALBERTO', label: 'SAN ALBERTO' },
                { value: 'SAN JAVIER', label: 'SAN JAVIER' },
                { value: 'SAN JUSTO', label: 'SAN JUSTO' },
                { value: 'SANTA MARIA', label: 'SANTA MARIA' },
                { value: 'SOBREMONTE', label: 'SOBREMONTE' },
                { value: 'TERCERO ARRIBA', label: 'TERCERO ARRIBA' },
                { value: 'TOTORAL', label: 'TOTORAL' },
                { value: 'TULUMBA', label: 'TULUMBA' },
                { value: 'UNION', label: 'UNION' },
              ],
            },
            expressionProperties: {
              hide: 'model.Misma_Direccion == "Si"',
              show: 'model.Misma_Direccion == "No"',
            }
          },
          {
            key: 'Localidad',
            type: 'input',
            templateOptions: {
              label: 'Localidad',
              placeholder: 'Localidad',
            },
            expressionProperties: {
              hide: 'model.Misma_Direccion == "Si"',
              show: 'model.Misma_Direccion == "No"',
            }
          },
          {
            key: 'Código Postal',
            type: 'input',
            templateOptions: {
              pattern: "\\d{1,10}",
              maxLength: 10,
              label: 'C.P.',
              placeholder: 'CP',
            },
            expressionProperties: {
              hide: 'model.Misma_Direccion == "Si"',
              show: 'model.Misma_Direccion == "No"',
            }
          },
          {
            key: 'Teléfono',
            type: 'input',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Teléfono',
              placeholder: 'Ingrese teléfono de contacto',
              required: true,
              pattern: "\\d{1,25}",
              maxLength: 25,
            },
          },
          {
            key: 'Email',
            type: 'input',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Email',
              placeholder: 'Ingrese Email',
              required: true,
            },
          },
          {
            key: 'Tipo de inmueble',
            type: 'select',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Tipo de inmueble',
              placeholder: 'Placeholder',
              required: true,
              options: [
                { value: "Propio", label: 'Propio' },
                { value: "Alquilado", label: 'Alquilado' },
                { value: "Prestado", label: 'Prestado' },
              ],
            },
          },
          {
            key: 'Actividad del microemprendimiento',
            type: 'input',
            validation: {
              show: true,
            },
            templateOptions: {
              label: '¿Cuál es la actividad del microemprendimiento?',
              placeholder: 'Ingrese una actividad',
              required: true,
            }
          },
          {
            key: 'El emprendimiento es',
            type: 'select',
            validation: {
              show: true,
            },
            templateOptions: {
              required: true,
              label: 'El emprendimiento es:',
              options: [
                { value: 'Unipersonal', label: 'Unipersonal' },
                { value: 'Familiar', label: 'Familiar' },
                { value: 'Grupal', label: 'Grupal' },
              ]
            }
          },
          {
            key: 'Tipo_proyecto',
            type: 'select',
            defaultValue: 'A iniciar',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Tipo de proyecto',
              required: true,
              options: [
                { value: 'A iniciar', label: 'A iniciar' },
                { value: 'En marcha', label: 'En marcha' },
                { value: 'Reactivación', label: 'Reactivación' },
                { value: 'Reconversión', label: 'Reconversión' },
                { value: 'Otro', label: 'Otro' },
              ],
            }
          },
          {
            key: 'Proyecto activo a partir de',
            type: 'input',
            validation: {
              show: true,
            },
            templateOptions: {
              type: 'date',
              label: 'Proyecto activo desde/a partir de',
            },
            expressionProperties: {
              hide: 'model.Tipo_proyecto == "A iniciar"',
              show: 'model.Tipo_proyecto == "En marcha";"Reactivación";"Otro";"Reconversión"',
            }
          },
          {
            key: 'Sector en el que se desarrolla la actividad',
            type: 'select',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Sector en el que se desarrolla la actividad',
              required: true,
              options: [
                { value: 'Producción de bienes', label: 'Producción de bienes' },
                { value: 'Comercio', label: 'Comercio' },
                { value: 'Servicio', label: 'Servicio' },
                { value: 'Agropeciario', label: 'Agropecuario' },
                { value: 'Artesanías', label: 'Artesanías' },
                { value: 'Otro', label: 'Otro' },
              ],
            }
          },
          {
            key: 'Posee experiencia',
            type: 'select',
            validation: {
              show: true,
            },
            templateOptions: {
              options: [
                { value: 'Si', label: 'Si' },
                { value: 'No', label: 'No' },
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
            validation: {
              show: true,
            },
            templateOptions: {
              required: true,
              label: '¿Ha realizado cursos de capacitación relacionados con la temática del proyecto?',
              options: [
                { value: 'Si', label: 'Si' },
                { value: 'No', label: 'No' },
              ],
            }
          },
          {
            key: '¿Qué curso o capacitación le gustaría realizar?',
            type: 'input',
            validation: {
              show: true,
            },
            templateOptions: {
              required: true,
              label: '¿Qué curso o capacitación le gustaría realizar?',
            }
          },
          {
            key: 'pidio_alguna_vez_credito',
            type: 'select',
            validation: {
              show: true,
            },
            templateOptions: {
              required: true,
              label: '¿Pidió alguna vez un crédito para un microemprendimiento?',
              options: [
                { value: 'Si', label: 'Si' },
                { value: 'No', label: 'No' },
              ]
            }
          },
          {
            key: '¿Se lo otorgaron?',
            type: 'select',
            templateOptions: {
              label: '¿Se lo otorgaron?',
              options: [
                { value: 'Si', label: 'Si' },
                { value: 'No', label: 'No' },
              ]
            },
            expressionProperties: {
              hide: 'model.pidio_alguna_vez_credito == "No"',
              show: 'model.pidio_alguna_vez_credito == "Si"',
            }
          },
          {
            key: '¿En que situación lo solicitó?',
            type: 'input',
            templateOptions: {
              label: '¿En que situación lo solicitó?'
            },
            expressionProperties: {
              hide: 'model.pidio_alguna_vez_credito == "No"',
              show: 'model.pidio_alguna_vez_credito == "Si"',
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
      key: 'Grupo familiar',
      type: 'no repeat',
      validation: {
        show: true,
      },
      templateOptions: {
        required: true,
        addText: 'Grupo familiar',
      },
      fieldArray: {
        fieldGroup: [
          {
            template: '<p>Al finalizar, debe apretar el botón <b>Calcular</b>'
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
                    maxLength: 8,
                    minLength: 7,
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
                      { value: "Soltero", label: 'Soltero' },
                      { value: "Casado", label: 'Casado' },
                      { value: "Divorciado", label: 'Divorciado' },
                      { value: "Separado", label: 'Separado' },
                      { value: "Viudo", label: 'Viudo' },
                      { value: "Concubino", label: 'Concubino' },
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
                      { value: "Conyugue", label: 'Conyugue/Concubino' },
                      { value: "Hijo", label: 'Hijo/a' },
                      { value: "Padre-madre", label: 'Padre/Madre' },
                      { value: "Nieto", label: 'Nieto/a' },
                      { value: "Hermano", label: 'Hermano/a' },
                      { value: "Suegro", label: 'Suegro/a' },
                      { value: "Cunado", label: 'Cuñado/a' },
                      { value: "Sobrino", label: 'Sobrino/a' },
                      { value: "Otros", label: 'Otros' },
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
                      { value: "masculino", label: 'Masculino' },
                      { value: "femenino", label: 'Femenino' },
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
                      { value: "no", label: 'No' },
                      { value: "Física", label: 'Fisica / Motríz' },
                      { value: "Sensorial", label: 'Sensoral (visual, auditiva o del habla)' },
                      { value: "Mental", label: 'Mental' },
                      { value: "Otra", label: 'Otra' },
                    ],
                  },
                },
                {
                  key: '¿Posee certificado de discapacidad?',
                  type: 'select',
                  templateOptions: {
                    label: '¿Posee certificado de discapacidad?',
                    options: [
                      { value: "no", label: 'No' },
                      { value: "si", label: 'Si' },
                    ],
                  },
                },
                {
                  key: 'Asiste Establecimiento Educativo?',
                  type: 'select',
                  templateOptions: {
                    label: '¿Asiste a est. Educativo?',
                    options: [
                      { value: "no", label: 'No' },
                      { value: "si", label: 'Si' },
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
                      { value: "ninguno", label: 'Ninguno' },
                      { value: "jardin", label: 'Jardín' },
                      { value: "preescolar", label: 'Preescolar' },
                      { value: "primario inc", label: 'Primario Incompleto' },
                      { value: "primario comp", label: 'Primario Completo' },
                      { value: "secundario inc", label: 'Secundario Incompleto' },
                      { value: "secundario comp", label: 'Secundario Completo' },
                      { value: "terciario inc", label: 'Terciario Incompleto' },
                      { value: "terciario comp", label: 'Terciario Completo' },
                      { value: "universitario inc", label: 'Universitario Incompleto' },
                      { value: "Universitario comp", label: 'Universitario Completo' },
                    ],
                  },
                },
                {
                  key: 'Trabaja',
                  type: 'select',
                  templateOptions: {
                    label: '¿Trabaja?',
                    options: [
                      { value: "No", label: 'No' },
                      { value: "Si", label: 'Si' },
                    ],
                  },
                },
                {
                  key: 'Condición laboral',
                  type: 'select',
                  templateOptions: {
                    label: 'Condición Laboral',
                    options: [
                      { value: "patron o empleador", label: 'Patrón o Empleador' },
                      { value: "por cuenta propia", label: 'Por cuenta propia' },
                      { value: "obrero o empleado", label: 'Obrero o empleado' },
                      { value: "servicio domestico", label: 'Servicio doméstico' },
                      { value: "jubilado o pensionado", label: 'Jubilado o Pensionado' },
                      { value: "benef de prog de empleo", label: 'Beneficiario de Programa de Empleo' },
                      { value: "asignacion universal por hijo", label: 'Asignación Universal por hijo' },
                      { value: "benef de otros prog sociales", label: 'Beneficiario de otros Programas Sociales' },
                    ],
                  },
                  expressionProperties: {
                    hide: 'model.Trabaja == "No"',
                    show: 'model.Trabaja == "Si"',
                  }
                },
                {
                  key: 'Edad',
                  type: 'input',
                  templateOptions: {
                    label: 'Edad',
                    placeholder: 'Edad',
                    minLength: 1,
                    maxLength: 3,
                    pattern: '\\d{1,3}'
                  },
                },
                {
                  key: 'A cargo del titular',
                  type: 'select',
                  templateOptions: {
                    label: '¿Está a cargo del Titular?',
                    options: [
                      { value: "no", label: 'No' },
                      { value: "si", label: 'Si' },
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
          {
            key: 'btn_calcular',
            type: 'button',
            validation: {
              show: true,
            },
            templateOptions: {
              text: 'Calcular',
              onClick: ($event) => {
                var sum_ingreso = 0

                var clase_contentedora: any = this.form.get('Grupo familiar')

                var cont_valores = clase_contentedora.value
                var arr_cont_valores = cont_valores[0]
                var arr_ingresos: any = arr_cont_valores['Grupo Conviviente']


                for (var i = 0; i < arr_ingresos.length; i++) {
                  var ingresos: number = +arr_ingresos[i]['Ingresos mensuales']
                  sum_ingreso = sum_ingreso + ingresos
                }
                var contenedor_campos = clase_contentedora.controls[0]
                contenedor_campos.get('Total ingresos familiares').setValue(sum_ingreso)
              },
            }
          },
          {
            key: 'Total ingresos familiares',
            type: 'input',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Total ingresos familiares',
              required: true,
              disabled: true,
            }
          },
        ]
      }
    },

    //--------------------------------------------------------------------------------------------------------

    {
      className: 'datos-necesidades-a-cubrir',
      template: '<div><h2>Necesidad a cubrir con el micro préstamo:</h2></div>',
    },
    {
      key: 'Grupo Necesidades',
      type: 'no repeat',
      templateOptions: {
        required: true,
        addText: 'Insertar campo de necesidades',
      },
      fieldArray: {
        fieldGroup: [
          {
            className: 'datos-detalles',
            template: '<div><h3>Deberá detallar cuales son los productos que desea adquirir y el precio estimado de mercado de los mismos.<p>Al finalizar, debe apretar el botón <b>Calcular Total</b></p></h3></div>',
          },
          {
            key: 'Necesidades',
            type: 'repeat',

            templateOptions: {
              addText: 'Agregar Necesidad'
            },
            fieldArray: {
              fieldGroup: [
                {
                  key: 'Descripción',
                  type: 'input',
                  validation: {
                    show: true,
                  },
                  templateOptions: {
                    label: 'Descripción',
                    placeholder: 'Ingrese una descripción',
                    required: true,
                  }
                },
                {
                  key: 'Precio',
                  type: 'input',
                  validation: {
                    show: true,
                  },
                  templateOptions: {
                    label: 'Precio',
                    placeholder: 'Ingrese un precio',
                    pattern: '\\d{1,10}',
                    maxLength: 10,
                    required: true
                  }
                },
              ]
            }
          },
          {
            key: 'btn_calcular',
            type: 'button',
            validation: {
              show: true,
            },
            templateOptions: {
              text: 'Calcular Total',
              onClick: ($event) => {
                var sum_necesidades = 0

                var clase_contentedora: any = this.form.get('Grupo Necesidades')

                var cont_valores = clase_contentedora.value
                var arr_cont_valores = cont_valores[0]
                var arr_ingresos: any = arr_cont_valores['Necesidades']


                for (var i = 0; i < arr_ingresos.length; i++) {

                  var precio: number = +arr_ingresos[i]['Precio']
                  sum_necesidades = sum_necesidades + precio
                }

                var contenedor_campos = clase_contentedora.controls[0]
                contenedor_campos.get('Monto Total de las necesidades').setValue(sum_necesidades)
              },
            }
          },
          {
            className: 'datos-monto',
            template: '<p>',
          },
          {
            key: 'Monto Total de las necesidades',
            type: 'input',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Monto Total de las necesidades',
              disabled: true,
            }
          },
        ]
      }
    },
    //--------------------------------------------------------------------------------------------------------
    {
      className: 'datos-emprendimiento',
      template: '<div><h2>Informe sobre el emprendimiento</h2></div>',
    },
    {
      key: 'Datos informe sobre el emprendimiento',
      type: 'no repeat',
      templateOptions: {
        addText: 'Agregar informe sobre el emprendimiento'
      },
      fieldArray: {
        fieldGroup: [
          {
            template: '<div>En este campo deberá detallarnos sobre el proyecto que desea realizar o mejorar (si ya está en marcha) con el dinero de nuestro financiamiento. Entendiendo que deba responder las siguientes preguntas generales y a modo orientativo:</div>'
          },
          {
            template: '<ul><li>Que productos o servicios vende o venderá.</li><li>Cuál es el proceso de producción del bien o servicio, dónde lo va realizar, como, con quien, en que consiste, y el tiempo que le insumirá.</li><li>Cuántas unidades vende o proyecta vender, a qué precio; detalle la forma en que calcula el precio del producto?. Efectúe un breve resumen de ingresos y gastos estimados del proyecto en forma mensual</li><li>¿Donde cree vender su producto, actividades pensadas para lograrlo, etc?.</li><li>¿Cuenta con elementos para realizar el proyecto (maquinaria, materia prima, etc)?.</li><li>¿Que es lo que desea comprar con el micropréstamo?. ¿Como cree que le ayudará en el emprendimiento?.</li></ul>'
          },
          {
            template: '<p><h2>PARA MAYOR FACILIDAD, LOS DATOS NUMÉRICOS DEL PROYECTO PODRÁ REALIZARLO EN UNA HOJA Y CARGARLOS COMO UNA FOTO CONJUNTAMENTE CON EL RESTO DE INFORMACIÓN A SUMINISTRARNOS</h2>'
          },
          {
            template: '<h2>TENGA EN CUENTA QUE LO BRINDADO POR UD. AQUÍ NOS SERVIRÁ PARA ANALIZAR Y LUEGO APROBAR EL MICROPRESTAMO, SI CORRESPONDIERE.</h2>'
          },
          {
            key: 'Informe del emprendimiento',
            type: 'textarea',
            templateOptions: {
              label: 'Informe del emprendimiento',
              placeholder: 'Ingrese un informe del emprendimiento',
              rows: 10,
              cols: 80,
              description: '',
            },
            expressionProperties: {
              'templateOptions.focus': 'formState.awesomeIsForced',
            }
          }
        ]
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
      validation: {
        show: true,
      },
      templateOptions: {
        required: true,
        addText: 'Ingresar datos de garante',
      },
      fieldArray: {
        fieldGroup: [
          {
            key: 'Autogarante',
            type: 'select',
            defaultValue: 'Soy autogarante',
            templateOptions: {
              label: 'Tipo de garante',
              options: [
                { value: 'Presento garante', label: 'Presento garante' },
                { value: 'Soy autogarante', label: 'Soy autogarante' }
              ]
            }
          },

          {
            key: 'Apellido',
            type: 'input',
            templateOptions: {
              label: 'Apellido',
              placeholder: 'Ingrese su apellido',
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
              'templateOptions.required': 'model.Autogarante == "Presento garante"'
            }
          },
          {
            key: 'Nombres',
            type: 'input',
            templateOptions: {
              label: 'Nombres',
              placeholder: 'Ingrese sus nombres',
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
              'templateOptions.required': 'model.Autogarante == "Presento garante"'
            }
          },
          {
            key: 'DNI',
            type: 'input',
            templateOptions: {
              pattern: "\\d{7,8}",
              label: 'DNI',
              placeholder: 'Su Dni',
              maxLength: 8,
              minLength: 7
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
              'templateOptions.required': 'model.Autogarante == "Presento garante"'
            }
          },
          {
            key: 'Calle',
            type: 'input',
            templateOptions: {
              label: 'Calle',
              placeholder: 'Direccion',
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
              'templateOptions.required': 'model.Autogarante == "Presento garante"'
            }
          },
          {
            key: 'Número',
            type: 'input',
            templateOptions: {
              pattern: "\\d{1,5}",
              maxLength: 5,
              label: 'Número',
              placeholder: 'Número',
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
              'templateOptions.required': 'model.Autogarante == "Presento garante"'
            }
          },
          {
            key: 'Torre',
            type: 'input',
            templateOptions: {
              label: 'Torre',
              placeholder: 'Torre',
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
            }
          },
          {
            key: 'Piso',
            type: 'input',
            templateOptions: {
              pattern: "\\d{1,2}",
              maxLength: 2,
              label: 'Piso',
              placeholder: 'Piso',
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
            }
          },
          {
            key: 'Depto',
            type: 'input',
            templateOptions: {
              label: 'Depto',
              placeholder: 'Depto',
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
            }
          },
          {
            key: 'Manzana',
            type: 'input',
            templateOptions: {
              label: 'Manzana',
              placeholder: 'Manzana',
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
            }
          },
          {
            key: 'Casa',
            type: 'input',
            templateOptions: {
              label: 'Casa',
              placeholder: 'Casa',
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
            }
          },
          {
            key: 'Barrio',
            type: 'input',
            templateOptions: {
              label: 'Barrio',
              placeholder: 'Barrio',
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
            }
          },
          {
            key: 'Departamento',
            type: 'select',
            templateOptions: {
              label: 'Departamento',
              placeholder: 'Placeholder',
              description: 'Departamento',
              options: [
                { value: 'CAPITAL', label: 'CAPITAL' },
                { value: 'CALAMUCHITA', label: 'CALAMUCHITA' },
                { value: 'COLON', label: 'COLON' },
                { value: 'CRUZ DEL EJE', label: 'CRUZ DEL EJE' },
                { value: 'GENERAL ROCA', label: 'GENERAL ROCA' },
                { value: 'GRAL SAN MARTIN', label: 'GRAL SAN MARTIN' },
                { value: 'ISCHILIN', label: 'ISCHILIN' },
                { value: 'JUAREZ CELMAN', label: 'JUAREZ CELMAN' },
                { value: 'MARCOS JUAREZ', label: 'MARCOS JUAREZ' },
                { value: 'MINAS', label: 'MINAS' },
                { value: 'POCHO', label: 'POCHO' },
                { value: 'PUNILLA', label: 'PUNILLA' },
                { value: 'RIO CUARTO', label: 'RIO CUARTO' },
                { value: 'RIO PRIMERO', label: 'RIO PRIMERO' },
                { value: 'RIO SECO', label: 'RIO SECO' },
                { value: 'RIO SEGUNDO', label: 'RIO SEGUNDO' },
                { value: 'ROQUE SAENZ PEÑA', label: 'ROQUE SAENZ PEÑA' },
                { value: 'SAN ALBERTO', label: 'SAN ALBERTO' },
                { value: 'SAN JAVIER', label: 'SAN JAVIER' },
                { value: 'SAN JUSTO', label: 'SAN JUSTO' },
                { value: 'SANTA MARIA', label: 'SANTA MARIA' },
                { value: 'SOBREMONTE', label: 'SOBREMONTE' },
                { value: 'TERCERO ARRIBA', label: 'TERCERO ARRIBA' },
                { value: 'TOTORAL', label: 'TOTORAL' },
                { value: 'TULUMBA', label: 'TULUMBA' },
                { value: 'UNION', label: 'UNION' },
              ],
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
              'templateOptions.required': 'model.Autogarante == "Presento garante"'
            }
          },
          {
            key: 'Localidad',
            type: 'input',
            templateOptions: {
              label: 'Localidad',
              placeholder: 'Localidad',
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
              'templateOptions.required': 'model.Autogarante == "Presento garante"'
            }
          },
          {
            key: 'Código Postal',
            type: 'input',
            templateOptions: {
              label: 'C.P.',
              placeholder: 'Ingrese C.P.',
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
              'templateOptions.required': 'model.Autogarante == "Presento garante"'
            }
          },
          {
            key: 'Teléfono de contacto',
            type: 'input',
            templateOptions: {
              pattern: "\\d{1,25}",
              maxLength: 25,
              label: 'Teléfono',
              placeholder: 'Ingrese teléfono de contacto',
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
              'templateOptions.required': 'model.Autogarante == "Presento garante"'
            }
          },
          {
            key: 'Estado civíl',
            type: 'select',
            templateOptions: {
              label: 'Estado Civil',
              options: [
                { value: "Soltero", label: 'Soltero' },
                { value: "Casado", label: 'Casado' },
                { value: "Divorciado", label: 'Divorciado' },
                { value: "Separado", label: 'Separado' },
                { value: "Viudo", label: 'Viudo' },
                { value: "Concubino", label: 'Concubino' },
              ],
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
              'templateOptions.required': 'model.Autogarante == "Presento garante"'
            }
          },
          {
            key: 'Fecha de Nacimiento garante',
            type: 'input',
            templateOptions: {
              type: 'date',
              label: 'Fecha de nacimiento',
              placeholder: 'Fecha de nacimiento dd/mm/aaaa',
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
              'templateOptions.required': 'model.Autogarante == "Presento garante"'
            }
          },
          {
            key: 'Edad',
            type: 'input',
            templateOptions: {
              label: 'Edad',
              placeholder: 'Edad',
              pattern: '\\d{1,3}',
              maxLength: 3
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
              'templateOptions.required': 'model.Autogarante == "Presento garante"'
            }
          },
          {
            key: 'CUIL',
            type: 'input',
            templateOptions: {
              label: 'CUIL',
              placeholder: 'Su CUIL',
              pattern: '\\d{11}',
              maxLength: 11,
              minLength: 11
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
              'templateOptions.required': 'model.Autogarante == "Presento garante"'
            }
          },
          {
            key: 'Nacionalidad',
            type: 'input',
            templateOptions: {
              label: 'Nacionalidad',
              placeholder: 'Su Nacionalidad',
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
              'templateOptions.required': 'model.Autogarante == "Presento garante"'
            }
          },
          {
            key: 'Vínculo con el solicitante',
            type: 'input',
            templateOptions: {
              label: 'Vínculo con el solicitante',
              placeholder: 'Su vínculo con el solicitante',
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
              'templateOptions.required': 'model.Autogarante == "Presento garante"'
            }
          },
          {
            key: 'E-mail',
            type: 'input',
            templateOptions: {
              label: 'E-mail',
              placeholder: 'Ingrese un e-mail'
            },
            expressionProperties: {
              hide: 'model.Autogarante == "Soy autogarante"',
              show: 'model.Autogarante == "Presento garante"',
              'templateOptions.required': 'model.Autogarante == "Presento garante"'
            }
          },

        ],
      },
    },
    {
      key: 'Monto solicitado',
      type: 'no repeat',
      defaultValue: '1',
      fieldArray: {
        fieldGroup: [
          {
            key: 'monto solicitado',
            type: 'input',
            defaultValue: '$27000',
            validation: {
              show: true,
            },
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
            defaultValue: '30',
            validation: {
              show: true,
            },
            templateOptions: {
              label: 'Cantidad de cuotas',
              disabled: true,
              placeholder: 'Cuotas',
            },
          },
          {
            key: 'Monto estimado de cuota',
            type: 'input',
            defaultValue: '$900',
            validation: {
              show: true,
            },
            templateOptions: {
              //pattern: "\\d{0,20}",
              label: 'Monto estimado de cuota',
              disabled: true,
              placeholder: 'Monto',
            },
          },
        ]
      }
    }
  ]



  createPdf() {
    let modelo = Object.entries(this.model);
    if (this.form.valid) {
      //
      var doc = new jsPDF('p', 'mm', 'a4');
      var img = new Image();
      img.src = 'assets/cabecera.jpg';
      doc.addImage(img, 'jpg', 0, 0);

      doc.setFont('helvetica')

      let m = 30;
      let y = 5;
      let x = 15;
      let i = 0; //
      let ll = 90;
      //var arr:JSON[];
      //console.log(this.form)

      for (let seccion of modelo) {

        if (Array.isArray(seccion[1]) != true) {
          seccion[1] = [[seccion[1]]]
        }
        //console.log(seccion)
        let arr: any = seccion[1];
        if (y > 240) {
          doc.addPage();
          doc.addImage(img, 'jpg', 0, 0);
          m = 30;
          y = 5;
          x = 15;
        }

        y = y + 6;
        doc.setFontSize(16);
        doc.setTextColor(45);
        doc.text(seccion[0], x, m + y); //nombre seccion
        doc.line(x, m + y + 1, x + 180, m + y + 1);
        //console.log(arr)
        for (var j = 0; j < arr.length; j++) {

          var res = [];
          var z = 0;

          for (var clave in arr[j]) {
            if (Array.isArray(arr[j][clave]) == true) {
              arr = arr.concat(arr[j][clave])
              continue
            }

            i++;
            res.push([clave, arr[j][clave]]);

            var registro: String[] = [clave, 'algo quee no se paso a string'];
            try {
              registro = res[z]; //paso los valores a string
            } catch (e) {
              console.log(e)
            }
            z++;
            var texto = ''
            //RESUELVO SI EL TEXTO ES LARGO O CORTO O SI ES DE UNA COLUMNA U OTRA
            //console.log(registro[1])
            texto = registro[1].toString()

            var text_arr_aux = new Array
            text_arr_aux = []
            text_arr_aux = texto.split("", texto.length)
            var text_arr = new Array
            text_arr = []
            var texto_aux = ""
            //Este for recorre todo el texto de un textarea y lo separa cada 88 caracteres o cuando haya un \n
            let cantidad_caracteres = 0
            let ultima_palabra = ""
            for (var jj = 0; jj < text_arr_aux.length; jj++) {
              if (text_arr_aux[jj] == '\n') {
                text_arr.push(texto_aux)
                texto_aux = ""
                cantidad_caracteres = 0
                continue
              }
              texto_aux = texto_aux + text_arr_aux[jj]
              cantidad_caracteres = cantidad_caracteres + 1
              if (cantidad_caracteres % 88 == 0) {
                //corta la ultima palabra y la pasa a la siguiente iteracion
                for (var letra = texto_aux.length; letra > 0; letra--) {
                  if (texto_aux[letra] == " ") {
                    ultima_palabra = texto_aux.slice(letra + 1, texto_aux.length)
                    texto_aux = texto_aux.slice(0, letra)
                    break
                  }
                }
                text_arr.push(texto_aux)
                texto_aux = ultima_palabra
              }
            }
            text_arr.push(texto_aux)


            if (texto.length > 40) { x = 15; y = y + 12; i++; ll = 180 }
            else {
              if (i % 2 != 0 || ll == 180) { x = 15; y = y + 12; ll = 90 }
              else { x = 110; ll = 90 }
            }
            //ACA PREGUNTO SI ESTOY SALIENDOME DE LA HOJA
            if (y > 240) {
              doc.addPage();
              doc.addImage(img, 'jpg', 0, 0);
              m = 30;
              y = 5;
              x = 15;
            }

            doc.setFontSize(10);
            doc.setDrawColor(100);
            //Escribe en el documento la lista de frases separada por 88 caracteres o \n
            for (var ia = 0; ia < text_arr.length; ia++) {
              doc.text(text_arr[ia], x, m + y); //valor
              if (y >= 240) {
                doc.addPage();
                doc.addImage(img, 'jpg', 0, 0);
                m = 30;
                y = 5;
                x = 15;
              }
              y = y + 5
            }
            y = y - 5

            doc.line(x, m + y + 1, x + ll, m + y + 1); // linea horizontal
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
      doc.save('solicitudCreditoL4' + nombreArchivo + '.pdf');

      alert("PDF Generado con éxito.")
    } else (error) => {
      console.error('error:', error);
    }
    if (this.form.invalid) {
      console.log(this.form.controls)
      var fields: any = this.form.controls
      var txt_alert = ""
      for (var seccion of Object.keys(fields)) {
        try {
          for (var clave of Object.keys(fields[seccion]["controls"][0]["controls"])) {
            let campo = fields[seccion]["controls"][0]["controls"][clave]
            try {
              let campos_internos = campo["controls"][0]["controls"]
              for (let campos of Object.keys(campos_internos)) {
                if (campos_internos[campos]["status"] == "INVALID") {
                  txt_alert = txt_alert + "Falta llenar el campo " + campos + " en " + seccion + "\n"
                }
              }
            } catch {

              if (campo["status"] == "INVALID") {
                txt_alert = txt_alert + "Falta llenar el campo " + clave + " en " + seccion + "\n"
              }
            }
          }
        } catch (e) {
          console.log(e)
        }
      }
      alert(txt_alert)
    }
  }
}

