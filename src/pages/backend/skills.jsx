import BackendLayout from '../../layouts/BackendLayout';
import Head from 'next/head';
import {useState, useCallback} from 'react';
import update from 'immutability-helper'
import Skill from '../../components/Skill/Skill';
import {Button, Spinner} from 'react-bootstrap';

function Skills(props) {
   const [skills, setSkills] = useState(props.skills);
   const [saving, setSaving] = useState(false);

   const moveItem = useCallback((dragIndex, hoverIndex) => {
      setSkills((prevCards) =>
        update(prevCards, {
           $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, prevCards[dragIndex]],
           ],
        }),
      )
   }, []);

   const addSkill = () => {
      setSkills([...skills, {
         id: new Date().getTime(),
         name: '',
         percent: 0
      }])
   };

   const deleteItem = (skillIndex) => {
      setSkills(skills.filter((skill, index) => index !== skillIndex));
   };


   const isValid = () => {
      return skills.length && skills.every((skill) => !!skill.name && skill.percent > 1);
   };

   const changeSkill = (index, id, data) => {
      skills[index] = {id, ...data};
      setSkills(skills);
   };

   const save = () => {
      if (isValid()) {
         setSaving(true);

         setTimeout(() => {
            setSaving(false);
         }, 2000);
      }
   };

   return <BackendLayout>
      <Head>
         <title>Backend / Skills</title>
      </Head>
      <div className="w-75 mx-auto">
         {
           !saving && skills.map((skill, index) => {
               return <div className="mb-2" key={skill.id}>
                  <Skill
                    index={index}
                    id={skill.id}
                    name={skill.name}
                    moveItem={moveItem}
                    deleteItem={() => deleteItem(index)}
                    percent={skill.percent}
                    changeData={(data) => changeSkill(index, skill.id, data)}
                  />
               </div>
            })
         }

         {
            !saving &&
              <>
                 <Button variant="primary" className="w-100 mt-5" onClick={addSkill}>Add skill</Button>
                 <hr className="d-block mt-5"/>
                 <Button variant="success d-table ms-auto mt-5" onClick={save}>Save</Button>
              </>
         }

         {
            saving && <Spinner className="d-block mt-5 mx-auto" animation="border" role="status">
               <span className="visually-hidden">Loading...</span>
            </Spinner>
         }

      </div>
   </BackendLayout>
};

Skills.auth = true;

export default Skills;

export async function getServerSideProps() {
   return {
      props: {
         skills: [
            {
               id: 1,
               name: 'Skill Name',
               percent: 0
            },
            {
               id: 2,
               name: 'Skill Name 2',
               percent: 0
            }
         ]
      }
   }
}
