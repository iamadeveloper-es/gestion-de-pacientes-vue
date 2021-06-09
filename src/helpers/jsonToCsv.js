export default{
    downloadCsv(data){
        const blob = new Blob([data], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.setAttribute('hidden', '')
        a.setAttribute('href', url)
        a.setAttribute('download', 'download.csv')
        document.body.appendChild(a)
        a.click()
      },
      objectToCsv(data){
        const csvRows = []
    
        // get the headers
        const headers = Object.keys(data[0]) 
    
        csvRows.push(headers.join(','))
    
        // lopp over the rows
        for (const row of data){
         const values = headers.map(header => {
           const escaped = (''+row[header]).replace(/"/g, '\\"')
            return `"${escaped}"`
          })
    
          csvRows.push(values.join(','))
    
        }
         return csvRows.join('\n')
        // from escaped comma separated values
      },
      setCSVPatients(obj){
        const json = obj
    
        const data = json.map((row) => ({
          id: row.datos_paciente.id,
          nombre: row.datos_paciente.nombre,
          apellidos: row.datos_paciente.apellidos,
          fecha_nacimiento: row.datos_paciente.fecha_nacimiento,
          sexo: row.datos_paciente.sexo,
          estado: row.ficha_dental.estado,
          clinica: row.ficha_dental.clinica,
          objetivo: row.ficha_dental.objetivo_tratamiento,
          recorte: row.ficha_dental.otros_datos.recorte_alineadores
          
        }))
    
        const csvData = this.objectToCsv(data)
        this.downloadCsv(csvData)
      }
}
