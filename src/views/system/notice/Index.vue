<template>
  <div class="grid p-fluid">
    <div class="col-12 md:col-6">
      <div class="card">
        <h5>InputText</h5>
        <div class="grid formgrid">
          <div class="col-12 mb-2 lg:col-4 lg:mb-0">
            <InputText type="text" placeholder="Default"></InputText>
          </div>
          <div class="col-12 mb-2 lg:col-4 lg:mb-0">
            <InputText type="text" placeholder="Disabled" :disabled="true"></InputText>
          </div>
          <div class="col-12 mb-2 lg:col-4 lg:mb-0">
            <InputText type="text" placeholder="Invalid" invalid />
          </div>
        </div>

        <h5>Icons</h5>
        <div class="grid formgrid">
          <div class="col-12 mb-2 lg:col-6 lg:mb-0">
            <IconField>
              <InputIcon class="pi pi-user" />
              <InputText type="text" placeholder="Username" />
            </IconField>
          </div>
          <div class="col-12 mb-2 lg:col-6 lg:mb-0">
            <IconField iconPosition="left">
              <InputText type="text" placeholder="Search" />
              <InputIcon class="pi pi-search" />
            </IconField>
          </div>
        </div>

        <h5>Float Label</h5>
        <FloatLabel>
          <InputText id="username" type="text" v-model="floatValue" />
          <label for="username">Username</label>
        </FloatLabel>

        <h5>Textarea</h5>
        <Textarea placeholder="Your Message" :autoResize="true" rows="3" cols="30" />

        <h5>AutoComplete</h5>
        <AutoComplete placeholder="Search" id="dd" :dropdown="true" :multiple="true" v-model="selectedAutoValue"
          :suggestions="autoFilteredValue" @complete="searchCountry($event)" field="name" />

        <h5>Calendar</h5>
        <Calendar :showIcon="true" :showButtonBar="true" v-model="calendarValue"></Calendar>

        <h5>Spinner</h5>
        <InputNumber v-model="inputNumberValue" showButtons mode="decimal"></InputNumber>

        <h5>Chips</h5>
        <Chips v-model="chipsValue" />
      </div>

      <div class="card">
        <div class="grid">
          <div class="col-12">
            <h5>Slider</h5>
            <InputText v-model.number="sliderValue" />
            <Slider v-model="sliderValue" />
          </div>
          <div class="col-12 md:col-6">
            <h5>Rating</h5>
            <Rating v-model="ratingValue" />
          </div>
          <div class="col-12 md:col-6">
            <h5>ColorPicker</h5>
            <ColorPicker style="width: 2rem" v-model="colorValue" />
          </div>
          <div class="col-12">
            <h5>Knob</h5>
            <Knob v-model="knobValue" :step="10" :min="-50" :max="50" valueTemplate="{value}%" />
          </div>
        </div>
      </div>
    </div>

    <div class="col-12 md:col-6">
      <div class="card">
        <h5>RadioButton</h5>
        <div class="grid">
          <div class="col-12 md:col-4">
            <div class="field-radiobutton mb-0">
              <RadioButton id="option1" name="option" value="Chicago" v-model="radioValue" />
              <label for="option1">Chicago</label>
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="field-radiobutton mb-0">
              <RadioButton id="option2" name="option" value="Los Angeles" v-model="radioValue" />
              <label for="option2">Los Angeles</label>
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="field-radiobutton mb-0">
              <RadioButton id="option3" name="option" value="New York" v-model="radioValue" />
              <label for="option3">New York</label>
            </div>
          </div>
        </div>

        <h5>Checkbox</h5>
        <div class="grid">
          <div class="col-12 md:col-4">
            <div class="field-checkbox mb-0">
              <Checkbox id="checkOption1" name="option" value="Chicago" v-model="checkboxValue" />
              <label for="checkOption1">Chicago</label>
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="field-checkbox mb-0">
              <Checkbox id="checkOption2" name="option" value="Los Angeles" v-model="checkboxValue" />
              <label for="checkOption2">Los Angeles</label>
            </div>
          </div>
          <div class="col-12 md:col-4">
            <div class="field-checkbox mb-0">
              <Checkbox id="checkOption3" name="option" value="New York" v-model="checkboxValue" />
              <label for="checkOption3">New York</label>
            </div>
          </div>
        </div>

        <h5>Input Switch</h5>
        <InputSwitch v-model="switchValue" />
      </div>

      <div class="card">
        <h5>Listbox</h5>
        <Listbox v-model="listboxValue" :options="listboxValues" optionLabel="name" :filter="true" />

        <h5>Dropdown</h5>
        <Dropdown v-model="dropdownValue" :options="dropdownValues" optionLabel="name" placeholder="Select" />

        <h5>MultiSelect</h5>
        <MultiSelect v-model="multiselectValue" :options="multiselectValues" optionLabel="name"
          placeholder="Select Countries" :filter="true">
          <template #value="slotProps">
            <div class="inline-flex align-items-center py-1 px-2 bg-primary text-primary border-round mr-2"
              v-for="option of slotProps.value" :key="option.code">
              <span :class="'mr-2 flag flag-' + option.code.toLowerCase()" style="width: 18px; height: 12px" />
              <div>{{ option.name }}</div>
            </div>
            <template v-if="!slotProps.value || slotProps.value.length === 0">
              <div class="p-1">Select Countries</div>
            </template>
          </template>
          <template #option="slotProps">
            <div class="flex align-items-center">
              <span :class="'mr-2 flag flag-' + slotProps.option.code.toLowerCase()"
                style="width: 18px; height: 12px" />
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </MultiSelect>

        <h5>TreeSelect</h5>
        <TreeSelect v-model="selectedNode" :options="treeSelectNodes" placeholder="Select Item"></TreeSelect>
      </div>

      <div class="card">
        <h5>ToggleButton</h5>
        <ToggleButton v-model="toggleValue" onLabel="Yes" offLabel="No" :style="{ width: '10em' }" />

        <h5>SelectButton</h5>
        <SelectButton v-model="selectButtonValue1" :options="selectButtonValues1" optionLabel="name" />

        <h5>SelectButton - Multiple</h5>
        <SelectButton v-model="selectButtonValue2" :options="selectButtonValues2" optionLabel="name" :multiple="true" />
      </div>
    </div>

    <div class="col-12">
      <div class="card">
        <h5>Input Groups</h5>
        <div class="grid p-fluid">
          <div class="col-12 md:col-6">
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-user"></i>
              </InputGroupAddon>
              <InputText placeholder="Username" />
            </InputGroup>
          </div>

          <div class="col-12 md:col-6">
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-clock"></i>
              </InputGroupAddon>
              <InputGroupAddon>
                <i class="pi pi-star-fill"></i>
              </InputGroupAddon>
              <InputNumber placeholder="Price" />
              <InputGroupAddon>$</InputGroupAddon>
              <InputGroupAddon>.00</InputGroupAddon>
            </InputGroup>
          </div>

          <div class="col-12 md:col-6">
            <InputGroup>
              <Button label="Search" />
              <InputText placeholder="Keyword" />
            </InputGroup>
          </div>

          <div class="col-12 md:col-6">
            <InputGroup>
              <InputGroupAddon>
                <Checkbox v-model="inputGroupValue" :binary="true" />
              </InputGroupAddon>
              <InputText placeholder="Confirm" />
            </InputGroup>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,onMounted} from 'vue'
onMounted(() => {})

</script>
<style scoped lang='scss'>
</style>