// définir les modules dans un objet
Efrei_Modules = {
    "semestre 4": {
      "Formation générale": {
        "Dissertation et Rhétorique": {
          "CE": 0.2,
          "DE": 0.5,
          "Projet": 0.3
        },
        "Economie": {
          "DE": 0.7,
          "NOTE": 0.3
        },
        "English 4 - Preparation for the Study Abroad Program": {
          "CE": 0.2,
          "CO": 0.2,
          "DE": 0.4,
          "TD20": 0.2
        },
        "Learning XP": {
          "NoTE": 1
        }
      },
      "UE - Informatique génnérale": {
        "Introduction aux Bases de Données": {
          "DE": 0.6,
          "TD": 0.2,
          "TP": 0.2
        },
        "Programmation Oriente Objet en java": {
          "DE": 0.6,
          "TD": 0.2,
          "TP": 0.2
        },
        "Programmation Web": {
          "DE": 0.5,
          "¨PRJ": 0.3,
          "TP": 0.2
        }
      },
      "UE - Mathématiques": {
        "Analyse de données": {
          "CE": 0.4,
          "DE": 0.6
        },
        "Automates finis et expressions rationnelles": {
          "DE": 0.4,
          "PRJ": 0.4,
          "TD": 0.2
        },
        "Modélisation mathématique": {
          "CTP": 0.2,
          "DE": 0.6,
          "PRJ": 0.2
        }
      },
      "UE -Physique et électronique": {
        "Propagation électromgnétique": {
          "DE": 0.6,
          "TAI": 0.1,
          "TD": 0.3
        },
        "Systèmes de transmission": {
          "CTD": 0.2,
          "DE": 0.6,
          "PRJ": 0.2,
          "TP": 0
        },
        "Thermodynamique": {
          "DE": 0.6,
          "TAI": 0.1,
          "TD": 0.3
        }
      },
      "UE -Projet Transverse": {
        "Projet transverse L2": {
          "PRJ": 1
        }
      },
      "UE -Stage L2": {
        "Stage commercial": {
          "": 2
        }
      }
    },
    "semestre 3": {
      "UE -Formation générale": {
        "Dissertation et critique d'un essai": {
          "CE": 0.2,
          "DE": 0.5,
          "PRJ": 0.3
        },
        "Englhish 3 - Scientific and Technical English": {
          "CE": 0.2,
          "CO": 0.2,
          "DE": 0.4,
          "TD20": 0.2
        },
        "Reading and Speaking": {
          "CE": 0.3,
          "DE": 0.7
        }
      },
      "UE -Informatique générale": {
        "Introduction à la Programmation": {
          "DE": 0.5,
          "TP": 0.5
        },
        "Programmation Structurée": {
          "DE": 0.5,
          "TD": 0.2,
          "TP": 0.3
        },
        "Algorithmique": {
          "DE": 0.5,
          "TD": 0.2,
          "TP": 0.3
        }
      },
      "UE -Mathématiques": {
        "Algèbre linéaire": {
          "DE": 0.6,
          "TD": 0.2,
          "TP": 0.2
        },
        "Analyse numérique": {
          "DE": 0.6,
          "TD": 0.2,
          "TP": 0.2
        },
        "Probabilités et statistiques": {
          "DE": 0.5,
          "TD": 0.3,
          "TP": 0.2
        }
      },
      "UE -Physique et électronique": {
        "Electrocinétique": {
          "DE": 0.6,
          "TD": 0.4
        },
        "Outils mathématiques pour la physique": {
          "DE": 0.6,
          "TD": 0.4
        },
        "Optique": {
          "DE": 0.6,
          "TD": 0.4
        }
      },
      "UE -Stage L1": {
        "Stage d'initiation": {
          "": 2
        }
      }
    }
  }

function getSemesterByNumber(number){
    return  Efrei_Modules[`semestre ${number}`];
}

function getSemesterUeNames(Semester_Number){
    let UE = Object.keys(getSemesterByNumber(Semester_Number));
    
    return UE;
}


function getSemesterUeModuleNames(Semester_Number, UE_Name){
    let Modules = Object.keys(Efrei_Modules[`semestre ${Semester_Number}`][UE_Name]);
    
    return Modules;
}

function getSemesterUeModuleStepsAndQuota(Semester_Number, UE_Name, Module_Name){
    let Module = Efrei_Modules[`semestre ${Semester_Number}`][UE_Name][Module_Name];
    console.log(Module)
    // extraire les étapes ( de ce ctd... ) et leur coefficient dans un tableau double [[étape, coeff], [étape, coeff]...]]  avec Object.entries()
    return Module;
}

getSemesterUeModuleNames(3, "UE -Mathématiques");

// tester la dernière fonction

// faire des fonctions pour calculer les moyennes d'un module en fonction des notes et des coefficients
// faire un bas de page pour expliquer la compensation des modules et rattrapage et conseilles 
// faire une fonction qui crée automatiquement un tableau vide


```

<table>
  <thead>
    <tr>*
      <th>UE</th>
      <th>Module</th>
      <th>Type</th>
      <th>Coeff</th>
      <th>Moyenne/Résultat</th>
  </thead>
<table>

``` 