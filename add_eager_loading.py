from pathlib import Path
import re

files = [
    'src/components/AgriculturalForestry.jsx',
    'src/components/Carriers.jsx',
    'src/components/ChauffeurDrivenPSV.jsx',
    'src/components/ConsequentialLoss.jsx',
    'src/components/ContractorsAllRisks.jsx',
    'src/components/ContractorsPlantMachinery.jsx',
    'src/components/Customs.jsx',
    'src/components/DomesticPackage.jsx',
    'src/components/ElectronicEquipment.jsx',
    'src/components/FireAndPerils.jsx',
    'src/components/GeneralCartage.jsx',
    'src/components/GolfersInsurance.jsx',
    'src/components/GoodsInTransit.jsx',
    'src/components/GroupLife.jsx',
    'src/components/ImmigrationSecurity.jsx',
    'src/components/Industrial.jsx',
    'src/components/InstitutionalFleet.jsx',
    'src/components/MachineryBreakdown.jsx',
    'src/components/MarineCargo.jsx',
    'src/components/MarineHull.jsx',
    'src/components/MotorCycle.jsx',
    'src/components/MotorVehicle.jsx',
    'src/components/Performance.jsx',
    'src/components/ProfessionalIndemnity.jsx',
    'src/components/PublicLiability.jsx',
    'src/components/Tender.jsx',
    'src/components/WorkInjury.jsx',
]
pattern = re.compile(r'<img((?![^>]*loading=)[^>]*?)>')
updated = []
for path in files:
    p = Path(path)
    if not p.exists():
        continue
    text = p.read_text(encoding='utf-8')
    new_text = pattern.sub(lambda m: '<img loading="eager"' + m.group(1) + '>', text)
    if new_text != text:
        p.write_text(new_text, encoding='utf-8')
        updated.append(path)
print('updated', updated)
