<template>
  
  <v-container>
  
  <v-col cols="8">  
  
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="submit">
      <validation-provider
        v-slot="{ errors }"
        name="firstName"
        rules="required|max:15"
      >
        <v-text-field
          v-model="firstName"
          :counter="15"
          :error-messages="errors"
          label="ชื่อ"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="lastName"
        rules="required|max:15"
      >
        <v-text-field
          v-model="lastName"
          :counter="15"
          :error-messages="errors"
          label="นามสกุล"
          required
        ></v-text-field>
      </validation-provider>


      <validation-provider
        v-slot="{ errors }"
        name="phoneNumber"
        :rules="{
          required: true,
          digits: 10,
        }"
      >
        <v-text-field
          v-model="phoneNumber"
          :counter="10"
          :error-messages="errors"
          label="เบอร์โทรศัพท์"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="อีเมล"
          required
        ></v-text-field>
      </validation-provider>


      <validation-provider
        v-slot="{ errors }"
        name="gender"
        rules="required"
      >
        <v-select
          v-model="selectGender"
          :items="gender"
          :error-messages="errors"
          label="เพศ"
          data-vv-name="select"
          required
        ></v-select>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="education"
        rules="required"
      >
        <v-select
          v-model="selectEducation"
          :items="education"
          :error-messages="errors"
          label="การศึกษา"
          data-vv-name="select"
          required
        ></v-select>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="carrer"
        rules="required"
      >
        <v-select
          v-model="selectCarrer"
          :items="carrer"
          :error-messages="errors"
          label="อาชีพปัจจุบัน"
          data-vv-name="select"
          required
        ></v-select>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="company"
        rules="required|max:15"
      >
        <v-text-field
          v-model="company"
          :counter="15"
          :error-messages="errors"
          label="ชื่อบริษัท"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="province" rules="required|max:15"
      >
        <v-text-field
          v-model="province"
          :counter="15"
          :error-messages="errors"
          label="ชื่อจังหวัดที่คุณอาศัยอยู่ (ไม่ต้องมีคำว่าจังหวัด)"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="timeToLearn"
        :rules="{
          required: true
        }"
      >
        <v-text-field
          v-model="timeToLearn"
          :error-messages="errors"
          label="เวลาที่มีเพื่อการเรียนรู้ ชม./สัปดาห์"
          required
        ></v-text-field>
      </validation-provider>


      <validation-provider
        v-slot="{ errors }"
        name="whyYouJoinUs"
        rules="required|max:100"
      >
        <v-text-field
          v-model="whyYouJoinUs"
          :error-messages="errors"
          label="เหตุผลที่ท่านเข้ามาสมัครในเว็บนี้"
          required
        ></v-text-field>
      </validation-provider>

      
      <validation-provider
        v-slot="{ errors }"
        name="skill1"
        rules="required"
      >
        <v-select
          v-model="select_skill_1"
          :items="skills"
          :error-messages="errors"
          label="ความสามารถปัจจุบัน อันดับ 1"
          data-vv-name="select"
          required
        ></v-select>
      </validation-provider>



       
    
    <v-radio-group
      v-model="levelSkill1"
      row
    >
      <v-radio
        label="Level 1"
        value="1"
      ></v-radio>

      <v-radio
        label="Level 2"
        value="2"
      ></v-radio>
      
      <v-radio
        label="Level 3"
        value="3"
      ></v-radio>

      <v-radio
        label="Level 4"
        value="4"
      ></v-radio>

      <v-radio
        label="Level 5"
        value="5"
      ></v-radio>

    </v-radio-group>
  





      <validation-provider
        v-slot="{ errors }"
        name="skill2"
        rules="required"
      >
        <v-select
          v-model="select_skill_2"
          :items="skills"
          :error-messages="errors"
          label="ความสามารถปัจจุบัน อันดับ 2"
          data-vv-name="select"
          required
        ></v-select>
      </validation-provider>


      <v-radio-group
      v-model="levelSkill2"
      row
    >
      <v-radio
        label="Level 1"
        value="1"
      ></v-radio>

      <v-radio
        label="Level 2"
        value="2"
      ></v-radio>
      
      <v-radio
        label="Level 3"
        value="3"
      ></v-radio>

      <v-radio
        label="Level 4"
        value="4"
      ></v-radio>

      <v-radio
        label="Level 5"
        value="5"
      ></v-radio>

    </v-radio-group>

      
      <validation-provider
        v-slot="{ errors }"
        name="skill3"
        rules="required"
      >
        <v-select
          v-model="select_skill_3"
          :items="skills"
          :error-messages="errors"
          label="ความสามารถปัจจุบัน อันดับ 3"
          data-vv-name="select"
          required
        ></v-select>
      </validation-provider>

      <v-radio-group
      v-model="levelSkill3"
      row
    >
      <v-radio
        label="Level 1"
        value="1"
      ></v-radio>

      <v-radio
        label="Level 2"
        value="2"
      ></v-radio>
      
      <v-radio
        label="Level 3"
        value="3"
      ></v-radio>

      <v-radio
        label="Level 4"
        value="4"
      ></v-radio>

      <v-radio
        label="Level 5"
        value="5"
      ></v-radio>

    </v-radio-group>

      
      <validation-provider
        v-slot="{ errors }"
        name="targetSkill1"
        rules="required"
      >
        <v-select
          v-model="selectTatget1"
          :items="targetSkills"
          :error-messages="errors"
          label="ความสามารถที่ต้องการพัฒนา อันดับ 1"
          data-vv-name="select"
          required
        ></v-select>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="targetSkill2"
        rules="required"
      >
        <v-select
          v-model="selectTatget2"
          :items="targetSkills"
          :error-messages="errors"
          label="ความสามารถที่ต้องการพัฒนา อันดับ 2"
          data-vv-name="select"
          required
        ></v-select>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="targetSkill3"
        rules="required"
      >
        <v-select
          v-model="selectTatget3"
          :items="targetSkills"
          :error-messages="errors"
          label="ความสามารถที่ต้องการพัฒนา อันดับ 3"
          data-vv-name="select"
          required
        ></v-select>
      </validation-provider>


      <validation-provider
        v-slot="{ errors }"
        rules="required"
        name="checkbox"
      >
        <v-checkbox
          v-model="agree"
          :error-messages="errors"
          value="1"
          label="ยินยอมให้ข้อมูล เพื่อเป็นประโยชน์ในการเรียนรู้"
          type="checkbox"
          required
        ></v-checkbox>
      </validation-provider>
    

      <v-btn
        class="mr-4 primary"
        type="submit"
        :disabled="invalid"
        
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </validation-observer>
  
  </v-col>

  </v-container>
</template>

<script>
  import { db } from '@/main.js'
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      select_skill_1: null,
      select_skill_2: null,
      select_skill_3: null,
      selectTatget1: null,
      selectTatget2: null,
      selectTatget3: null,
      selectEducation: '',
      selectCarrer: '',
      selectGender: '',
      whyYouJoinUs: '',
      province: null,
      company: null,
      timeToLearn: '',
      levelSkill1: 1,
      levelSkill2: 1,
      levelSkill3: 1,
      agree: null,
      gender: [
        'ชาย',
        'หญิง',
        'ขอไม่ระบุ',
      ],
      education: [
        'ประถม',
        'มัธยมต้น',
        'มัธยมปลาย',
        'ปวช.',
        'ปวส.',
        'ปริญญาตรี',
        'ปริญญาโท',
        'ปริญญาเอก',
        'อื่นๆ',
      ],
      carrer: [
        'ธุรกิจส่วนตัว',
        'นักเรียน',
        'นักศึกษา',
        'บริษัทเอกชน',
        'บริษัทมหาชน',
        'รัฐวิสาหกิจ',
        'รับราชการ',
        'วิสาหกิจเพื่อสังคม(SE)',
        'องค์กรพัฒนาเอกชน(NGOs)',
        'อยู่ระหว่างหางาน',
        'อื่นๆ',
      ],
      skills: [
        'Data Science',
        'Data Engineer',
        'Data Analytic',
        'Digital Marketing',
        'Influencer',
        'Youtuber',
        'AI',
        'IOT',
        'Machine Learning',
        'VR/AR',
        'Graphic Design',
        'Video Editor',
        'Content Creator',
        'Tester',
        'BA (Business Analyst)',
        'SA (System Analyst)',
        'UX/UI',
        'Developer',
        'Product Owner',
        'Hacker',
        'Scrum Master',
        'Agile Coach',
        'ขายของออนไลน์',
        'ทำอาหาร',
        'ศิลปะ',
        'ดนตรี',
        'ก่อสร้าง',
        'ซ่อมอุปกรณ์',
        'เกษตร',
        'การสอน',
        'พิธีกร/นักพูด',
        'นักแสดง',
        'แพทย์',
        'พยาบาล/ดูแลผู้ป่วย',
        'ติดต่อประสานงาน',
        'อื่นๆ',

      ],

      
      
      targetSkills: [
        'Data Science',
        'Data Engineer',
        'Data Analytic',
        'Digital Marketing',
        'Influencer',
        'Youtuber',
        'AI',
        'IOT',
        'Machine Learning',
        'VR/AR',
        'Graphic Design',
        'Video Editor',
        'Content Creator',
        'Tester',
        'BA (Business Analyst)',
        'SA (System Analyst)',
        'UX/UI',
        'Developer',
        'Product Owner',
        'Hacker',
        'Scrum Master',
        'Agile Coach',
        'ขายของออนไลน์',
        'ทำอาหาร',
        'ศิลปะ',
        'ดนตรี',
        'ก่อสร้าง',
        'ซ่อมอุปกรณ์',
        'เกษตร',
        'การสอน',
        'พิธีกร/นักพูด',
        'นักแสดง',
        'แพทย์',
        'พยาบาล/ดูแลผู้ป่วย',
        'ติดต่อประสานงาน',
        'อื่นๆ',

      ],

      

      
    }),

    methods: {
      async submit () {
        this.$refs.observer.validate()
        await db
        .collection('profile')
        .add({
            firstName: this.firstName,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber,
            email: this.email,
            select_skill_1: this.select_skill_1,
            select_skill_2: this.select_skill_2,
            select_skill_3: this.select_skill_3,
            selectTatget1: this.selectTatget1,
            selectTatget2: this.selectTatget2,
            selectTatget3: this.selectTatget3,
            selectGender: this.selectGender,
            selectEducation: this.selectEducation,
            selectCarrer: this.selectCarrer,
            whyYouJoinUs: this.whyYouJoinUs, 
            company: this.company,
            province: this.province,
            timeToLearn: this.timeToLearn,
            levelSkill1: this.levelSkill1,
            levelSkill2: this.levelSkill2,
            levelSkill3: this.levelSkill3,
            agree: this.agree
          })
          this.clear()
      },
      clear () {
        this.firstName= '',
        this.lastName= '',
        this.phoneNumber= '',
        this.email= '',
        this.select_skill_1= null,
        this.select_skill_2= null,
        this.select_skill_3= null,
        this.selectTatget1= null,
        this.selectTatget2= null,
        this.selectTatget3= null,
        this.selectGender= '',
        this.selectEducation= '',
        this.selectCarrer= '',
        this.whyYouJoinUs= '',
        this.company= null,
        this.province= null,
        this.timeToLearn= '',
        this.levelSkill1= 1,
        this.levelSkill2= 1,
        this.levelSkill3= 1,
        this.agree= null

        this.$refs.observer.reset()
      },
    },
  }
</script>
