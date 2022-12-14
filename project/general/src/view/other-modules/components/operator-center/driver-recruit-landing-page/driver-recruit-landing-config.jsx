import Vue from 'vue'
import { Button, Form, Divider, Modal, Card, Select, InputNumber, Upload, Icon, Cascader } from 'ant-design-vue'
import { htmlToElement, isNil } from '@/libs/util'
import { getCityList } from "_o/api/operator-carrier"
import { cpTranslate } from "@/libs/tools"
import arrayTreeFilter from 'array-tree-filter';

import './driver-recruit-landing-config.less'
import { CREATE, EDIT, DETAIL } from "./constant";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { uploadMixin } from "./uploadMixin";
import VEditor from "_a/v-editor/v-editor.vue"
import { operationTypeOptions } from "./conf"

const FormItem = Form.Item
const Option = Select.Option
const RichEditor = 'richEditor'

const toolbarConfig = [
  ["bold"],
  [{ header: [1, 2, false] }],
  [{ color: [] }, { background: [] }],
  [{ list: "bullet" }],
  ["clean"],
];

export default Vue.extend({
  name: 'driverRecruitLandingConfig',
  mixins: [uploadMixin],
  data() {
    return {
      currentPreViewIndex: 0,
      imageUrlList: [],
      imageUuidList: [],
      basicForm: this.$form.createForm(this, { name: 'recruit-landing-config' }),
      homePageForms: [
        // this.$form.createForm(this, { name: 'config0' }),
        // this.$form.createForm(this, { name: 'config1' }),
      ],
      cityList: [],
      configList: []
    }
  },
  computed: {
    ...mapGetters('operator-center/driver-recruit-landing-page', ['recruitParams']),
    isCreate() {
      return this.type === CREATE
    },
    isEdit() {
      return this.type === EDIT
    },
    isDetail() {
      return this.type === DETAIL
    }
  },
  provide: {},
  inject: {
    type: { default: CREATE },
    id: { default: '-1' },
  },
  async created() {
    await this.translateCityList()
  },
  // async activated() {
  //   await this.translateCityList()
  // },
  // async beforeRouteLeave(to, from, next) {
  //   await this.clearRecruitConfig()
  //   next()
  // },
  methods: {
    ...mapActions('operator-center/driver-recruit-landing-page', ['getRecruitConfig', 'clearRecruitConfig', 'submitRecruitConfig']),
    ...mapMutations({
      setRecruitParams: 'operator-center/driver-recruit-landing-page/SET_RECRUIT_PARAMS',
    }),
    getCityName(values) {
      const result = arrayTreeFilter(this.cityList, (item, level) => item.value === values[level])
      return result.length > 0 ? result[result.length - 1].label : ''
    },
    async translateCityList() {
      getCityList({}).then(res => {
        let list = cpTranslate(res.data.data);
        // this.cityList = [{ label: "??????????????????", value: 1 }, ...list];
        this.cityList = [...list];
      });
    },
    handleOk() {
      this.clearRecruitConfig()
      this.$router.replace({ name: 'driver-recruit-landing-page' })
    },
    handleCancel() {
      Modal.confirm({
        title: this.isCreate ? '???????????????????????????????' : '?????????????????????????',
        okText: '??????',
        cancelText: '??????',
        onOk: () => {
          this.clearRecruitConfig()
          this.$router.replace({ name: 'driver-recruit-landing-page' })
        }
      })
    },
    togglePreView(index) {
      this.currentPreViewIndex = index
    },
    addNewConfig() {
      const { pageConfList, cityConf } = this.recruitParams
      const index = this.homePageForms.length
      if (index >= 2) return this.$Message.info("???????????????2?????????");
      const form = this.$form.createForm(this, { name: `config${index}` })
      this.homePageForms.push(form)
      this.setRecruitParams({
        cityConf,
        pageConfList: [...pageConfList, {}]
      })
    },
    deleteConfig(index) {
      const { pageConfList, cityConf } = this.recruitParams
      let contents = Object.keys(this.$refs)
        .filter(refKey => !!~refKey.indexOf(RichEditor))
        .map(key => this.$refs[key].content)
      contents.splice(index, 1)
      contents.forEach((content, idx) => this.$refs[`${RichEditor}${idx}`].content = content)
      this.$delete(this.homePageForms, index)
      this.$delete(this.imageUrlList, index)
      this.$delete(this.imageUuidList, index)
      this.setRecruitParams({
        cityConf,
        pageConfList: pageConfList.filter((item, idx) => idx !== index)
      })
    },
    createConfigForm(ctx, index, form) {
      const { pageConfList } = ctx.recruitParams
      const formData = pageConfList[index] || {}
      const editorRef = `${RichEditor}${index}`
      return (
        <Form form={form} labelCol={{ span: 2 }} wrapperCol={{ span: 16 }}>
          <FormItem label={'????????????'} required wrapperCol={{ span: 8 }}>
            <Select
              disabled={this.isDetail}
              vDecorator={[
                'operationType',
                {
                  initialValue: String(!isNil(formData.operationType) ? formData.operationType : '1'),
                  rules: [{ required: true, message: '????????????' }]
                },
              ]}
              placeholder="?????????"
              onChange={this.handleSelectChange}
            >
              {
                operationTypeOptions.map(option => <Option value={option.value}>{option.text}</Option>)
              }
            </Select>
          </FormItem>
          
          <Form form={form} layout={'inline'}>
            <FormItem label={'????????????'} required class='just-label'></FormItem>
            <FormItem>
              ???:&nbsp;&nbsp;
              <InputNumber
                disabled={this.isDetail}
                vDecorator={[
                  'maleAgeMin',
                  {
                    initialValue: formData.maleAgeMin ? formData.maleAgeMin : null,
                    rules: [{ required: true, message: '????????????' }]
                  },
                ]}
                min={22}
                max={70}
                precision={0}
              />
              &nbsp;&nbsp;~
            </FormItem>
            <FormItem>
              <InputNumber
                disabled={this.isDetail}
                vDecorator={[
                  'maleAgeMax',
                  {
                    initialValue: formData.maleAgeMax ? formData.maleAgeMax : null,
                    rules: [{ required: true, message: '????????????' }]
                  }
                ]}
                min={22}
                max={70}
                precision={0}
              />
              &nbsp;&nbsp;??????,
            </FormItem>
            <FormItem>
              ???:&nbsp;&nbsp;
              <InputNumber
                disabled={this.isDetail}
                vDecorator={[
                  'femaleAgeMin',
                  {
                    initialValue: formData.femaleAgeMin ? formData.femaleAgeMin : null,
                    rules: [{ required: true, message: '????????????' }]
                  }
                ]}
                min={22}
                max={70}
                precision={0}
              />
              &nbsp;&nbsp;~
            </FormItem>
            <FormItem>
              <InputNumber
                disabled={this.isDetail}
                vDecorator={[
                  'femaleAgeMax',
                  {
                    initialValue: formData.femaleAgeMax ? formData.femaleAgeMax : null,
                    rules: [{ required: true, message: '????????????' }]
                  }
                ]}
                min={22}
                max={70}
                precision={0}
              />
              &nbsp;&nbsp;??????
            </FormItem>
          </Form>
          
          {
            !this.isDetail &&
            <FormItem label="????????????" required>
              <Upload
                name="file"
                showUploadList={false}
                action={ctx.actionUrl}
                onChange={(info) => ctx.handleChange(info, index)}
                headers={ctx.publicFileUploadHeader}
                beforeUpload={ctx.beforeUpload}
              >
                <Button> <Icon type="upload"/>????????????</Button>
              </Upload>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;??????: {'1125x1464'}</span>
            </FormItem>
          }
          
          
          <FormItem label=" " colon={false}>
            {
              !!this.imageUrlList[index] &&
              <figure>
                <img src={this.imageUrlList[index]} alt="" width="75"/>
                {/*<figcaption>The HTML Reference logo</figcaption>*/}
              </figure>
            }
          </FormItem>
          
          {
            !this.isDetail &&
            <FormItem label={'????????????'} wrapper-col={{ span: 20 }} required>
              <VEditor ref={editorRef} value={formData.recruitDesc ? formData.recruitDesc : ''} id={index}
                       toolbarConfig={toolbarConfig}
                       onInput={() => this.$forceUpdate()}/>
            </FormItem>
          }
          
          {
            this.isDetail &&
            <FormItem label={'????????????'}>
              <div class="rich" domPropsInnerHTML={
                pageConfList[index].recruitDesc
              }>
                {/*?????????*/}
              </div>
            </FormItem>
          }
        
        </Form>
      )
    },
    submit() {
      console.log('------submit------')
      let cityConf = !this.isEdit ? { /* cityCode: '', terminalType: '' */ } : { cityConfId: this.id }
      let pageConfList = [/* { femaleAgeMax, femaleAgeMin, maleAgeMax, maleAgeMin, operationType, recruitDesc, imgFileUrl, imgFileUuid } */]
      let textContentLimitExceeded = false
      let allowSubmit = true
      this.basicForm.validateFields((err, value) => {
        if (err) allowSubmit = false
        const { city, terminalType } = value
        cityConf = { ...cityConf, cityCode: city[1], terminalType }
      })
      this.homePageForms.forEach((form, index) => form.validateFields((err, value) => {
        if (err) allowSubmit = false
        const { femaleAgeMax, femaleAgeMin, maleAgeMax, maleAgeMin, operationType } = value
        const recruitDesc = this.$refs[`${RichEditor}${index}`].content
        const dom = htmlToElement(`<div>${recruitDesc}</div>`)
        if (dom.textContent.length > 2000) textContentLimitExceeded = true
        pageConfList = [
          ...pageConfList,
          {
            femaleAgeMax,
            femaleAgeMin,
            maleAgeMax,
            maleAgeMin,
            operationType,
            recruitDesc,
            imgFileUrl: this.imageUrlList[index],
            imgFileUuid: this.imageUuidList[index]
          }
        ]
      }))
      const params = { cityConf, pageConfList }
      console.log('@params: ', params)
      if (!allowSubmit) return console.warn('validateFields has errors!')
      if (!!textContentLimitExceeded) return this.$Message.error("???????????????????????????????????????");
      this.setRecruitParams(params)
      this.submitRecruitConfig({ type: this.type })
    },
    initializeFormData() {
      const { pageConfList } = this.recruitParams
      this.imageUrlList = pageConfList.map(item => item.imgFileUrl ? item.imgFileUrl : '')
      this.imageUuidList = pageConfList.map(item => item.imgFileUuid ? item.imgFileUuid : '')
    },
  },
  async mounted() {
    if (this.type !== CREATE) await this.getRecruitConfig({ cityConfId: this.id })
    const { pageConfList } = this.recruitParams
    this.homePageForms = pageConfList.map((val, idx) => this.$form.createForm(this, { name: `config${idx}` }))
    await this.initializeFormData()
  },
  destroyed() {
    this.clearRecruitConfig()
  },
  render(h) {
    const edit = this.$refs[`${RichEditor}${this.currentPreViewIndex}`] // ????????? ref
    const bgImg = this.imageUrlList[this.currentPreViewIndex] // ?????????
    const { pageConfList, cityConf = {} } = this.recruitParams
    
    return (
      <div class="driver-recruit-landing-config">
        <div class="driver-recruit-landing-config__container">
          
          <div class="basic-information-settings">
            <h1>??????????????????</h1>
            <Card>
              <Form form={this.basicForm} labelCol={{ span: 5 }} wrapperCol={{ span: 5 }}>
                <FormItem label={'????????????'} required>
                  <Select
                    disabled={this.isDetail}
                    vDecorator={[
                      'terminalType',
                      {
                        initialValue: String(!isNil(cityConf.terminalType) ? cityConf.terminalType : '0'),
                        rules: [{ required: true, message: '????????????' }]
                      },
                    ]}
                    placeholder="?????????"
                    onChange={this.handleSelectChange}
                  >
                    <Option value='0'>?????????????????????</Option>
                    {/*<Option value='1'>??????H5??????</Option>*/}
                  </Select>
                </FormItem>
                
                <FormItem label={'??????'} required>
                  <Cascader
                    disabled={this.isDetail}
                    ref="cityCascader"
                    vDecorator={[
                      'city',
                      {
                        initialValue: (!cityConf.provCode || !cityConf.cityCode) ? [] : [cityConf.provCode, cityConf.cityCode],
                        rules: [
                          { type: 'array', required: true, message: '??????????????????' }
                        ]
                      },
                    ]}
                    options={this.cityList}
                    placeholder="?????????"
                  />
                </FormItem>
              </Form>
            </Card>
          </div>
          
          <Divider/>
          
          <div class="recruitment-homepage-configuration">
            <Row gutter={16}>
              <Col span={17}>
                <h1>??????????????????</h1>
                {
                  this.homePageForms.map((form, index) => {
                    
                    return (
                      <fragment>
                        <Card title={'?????????'}>
                          {
                            !this.isDetail ?
                              index !== 0
                                ? <a onClick={() => this.deleteConfig(index)} slot='extra' href="#">??????</a>
                                : <a onClick={this.addNewConfig} slot='extra' href="#">??????????????????</a>
                              : null
                          }
                          {this.createConfigForm(this, index, form)}
                        </Card>
                        {index !== this.homePageForms.length - 1 && <Divider dashed/>}
                      </fragment>
                    )
                  })
                }
              </Col>
              
              <Col span={7}>
                <h1>??????????????????</h1>
                <div class="preview-container">
                  <div class="tab-content">
                    {/*tab ??????*/}
                    {
                      this.homePageForms.map((form, index) => {
                        const operationType = form.getFieldValue('operationType') || String(pageConfList[index].operationType || 1)
                        return (
                          <section class={this.currentPreViewIndex === index ? 'active' : ''}
                                   onClick={() => this.togglePreView(index)}>
                            {operationTypeOptions.find(options => options.value === operationType).viewText}
                          </section>
                        )
                      })
                    }
                  </div>
                  
                  <div class="post">
                    {bgImg ? <img src={bgImg} alt="postImg"/> : null}
                    <section>
                      <span>{this.getCityName(this.basicForm.getFieldValue('city')) || '???????????????'}</span>
                      <Icon type="down"/>
                    </section>
                  </div>
                  
                  <div class="title">
                    <h2>????????????</h2>
                    <Divider/>
                  </div>
                  
                  <div class="rich" domPropsInnerHTML={
                    edit
                      ? edit.content
                      ? edit.content
                      : ''
                      : pageConfList[this.currentPreViewIndex].recruitDesc
                      ? pageConfList[this.currentPreViewIndex].recruitDesc
                      : ''
                  }>
                    {/*?????????*/}
                  </div>
                  
                  <div class="button-content">
                    {/*?????? ????????????*/}
                    <a href="javascript:void(0)">????????????</a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          
          <Divider/>
          
          <div class="active__content">
            <Form label-col={{ span: 5 }} wrapper-col={{ span: 5 }}>
              <FormItem wrapper-col={{ span: 5, offset: 5 }}>
                {
                  !this.isDetail
                    ? <fragment>
                      <Button onClick={this.handleCancel}>??????</Button>
                      <Button type="primary" onClick={this.submit}>??????</Button>
                    </fragment>
                    : <Button type="primary" onClick={this.handleOk}>??????</Button>
                }
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    )
  }
})
