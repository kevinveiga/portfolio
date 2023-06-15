import React, { ReactElement } from 'react';

export const arrayMonth = [
  {
    label: '01',
    value: '01'
  },
  {
    label: '02',
    value: '02'
  },
  {
    label: '03',
    value: '03'
  },
  {
    label: '04',
    value: '04'
  },
  {
    label: '05',
    value: '05'
  },
  {
    label: '06',
    value: '06'
  },
  {
    label: '07',
    value: '07'
  },
  {
    label: '08',
    value: '08'
  },
  {
    label: '09',
    value: '09'
  },
  {
    label: '10',
    value: '10'
  },
  {
    label: '11',
    value: '11'
  },
  {
    label: '12',
    value: '12'
  }
];

export const arrayUF = [
  {
    label: 'UF',
    value: ''
  },
  {
    label: 'AC',
    value: 'ac'
  },
  {
    label: 'AL',
    value: 'al'
  },
  {
    label: 'AM',
    value: 'am'
  },
  {
    label: 'AP',
    value: 'ap'
  },
  {
    label: 'BA',
    value: 'ba'
  },
  {
    label: 'CE',
    value: 'ce'
  },
  {
    label: 'DF',
    value: 'df'
  },
  {
    label: 'ES',
    value: 'es'
  },
  {
    label: 'GO',
    value: 'go'
  },
  {
    label: 'MA',
    value: 'ma'
  },
  {
    label: 'MG',
    value: 'mg'
  },
  {
    label: 'MT',
    value: 'mt'
  },
  {
    label: 'MS',
    value: 'ms'
  },
  {
    label: 'PA',
    value: 'pa'
  },
  {
    label: 'PB',
    value: 'pb'
  },
  {
    label: 'PE',
    value: 'pe'
  },
  {
    label: 'PI',
    value: 'pi'
  },
  {
    label: 'PR',
    value: 'pr'
  },
  {
    label: 'RJ',
    value: 'rj'
  },
  {
    label: 'RN',
    value: 'rn'
  },
  {
    label: 'RO',
    value: 'ro'
  },
  {
    label: 'RR',
    value: 'rr'
  },
  {
    label: 'RS',
    value: 'rs'
  },
  {
    label: 'SC',
    value: 'sc'
  },
  {
    label: 'SE',
    value: 'se'
  },
  {
    label: 'SP',
    value: 'sp'
  },
  {
    label: 'TO',
    value: 'to'
  }
];

export function arrayYear({ initialYear }: { initialYear: number }): Record<string, string>[] {
  const arrayOfYears = [];
  const currentYear = new Date().getFullYear();

  for (let i = initialYear, l = currentYear + 1; i < l; i += 1) {
    arrayOfYears.push({ label: i.toString(), value: i.toString() });
  }

  return arrayOfYears;
}

export function OptionMonth(): ReactElement {
  return (
    <>
      <option value="01">01</option>
      <option value="02">02</option>
      <option value="03">03</option>
      <option value="04">04</option>
      <option value="05">05</option>
      <option value="06">06</option>
      <option value="07">07</option>
      <option value="08">08</option>
      <option value="09">09</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </>
  );
}

export function OptionUF(): ReactElement {
  return (
    <>
      <option value="">UF</option>
      <option value="ac">AC</option>
      <option value="al">AL</option>
      <option value="am">AM</option>
      <option value="ap">AP</option>
      <option value="ba">BA</option>
      <option value="ce">CE</option>
      <option value="df">DF</option>
      <option value="es">ES</option>
      <option value="go">GO</option>
      <option value="ma">MA</option>
      <option value="mg">MG</option>
      <option value="mt">MT</option>
      <option value="ms">MS</option>
      <option value="pa">PA</option>
      <option value="pb">PB</option>
      <option value="pe">PE</option>
      <option value="pi">PI</option>
      <option value="pr">PR</option>
      <option value="rj">RJ</option>
      <option value="rn">RN</option>
      <option value="ro">RO</option>
      <option value="rr">RR</option>
      <option value="rs">RS</option>
      <option value="sc">SC</option>
      <option value="se">SE</option>
      <option value="sp">SP</option>
      <option value="to">TO</option>
    </>
  );
}

export function OptionYear({ initialYear }: { initialYear: number }): ReactElement {
  const arrayOfYears = [];
  const currentYear = new Date().getFullYear();

  for (let i = initialYear, l = currentYear + 1; i < l; i += 1) {
    arrayOfYears.push(i);
  }

  return (
    <>
      {arrayOfYears.map((year: number) => {
        return (
          <option key={year} value={year}>
            {year}
          </option>
        );
      })}
    </>
  );
}
