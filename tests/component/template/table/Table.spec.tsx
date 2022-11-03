/**
 * @Description proTable单测
 * @Author youus
 * @Date 2022/10/22 19:26
 * @Version v1.0.0
 *
 * Hello, humor
 */


import { mount } from "@vue/test-utils";
import { describe, expect, test, vi } from 'vitest';
import MTablePlus from '../../../../lib/components/template/table/MTablePlus';
import { MParamLabel, MParamLabelArr } from "../../../../types/common/MParamLabel";
import { MTableColumn } from "shuimo-ui";
import { h } from "vue";

describe('MTablePlus组件', () => {
  test('单列表', async () => {
    const wrapper = mount({
      render() {
        return <MTablePlus data={[]} columns={[]}/>
      }
    })
    expect(wrapper.find('.m-table').exists()).toBeTruthy()
    expect(wrapper.find('.m-pagination').exists()).toBeFalsy()
  })

  test('普通参数列表', async () => {
    const columns: MParamLabel[] = [
      { param: 'id', label: 'id' },
      { param: 'name', label: '名称' }
    ]

    const data = [
      { id: 1, name: '壹' },
      { id: 2, name: '贰' }
    ]
    const wrapper = mount({
      render() {
        return <MTablePlus data={data} columns={columns}/>
      }
    })
    expect(wrapper.findAll('.m-tbody .m-tr').length).toBe(2) // 包含头部行
    expect(wrapper.findAll('.m-th').length).toBe(2)
  })

  test('部分行不渲染', async () => {
    const columns: MParamLabel[] = [
      { param: 'id', label: 'id' },
      { param: 'name', label: '名称', visible: false }
    ]

    const data = [
      { id: 1, name: '壹' },
      { id: 2, name: '贰' }
    ]
    const wrapper = mount({
      render() {
        return <MTablePlus data={data} columns={columns}/>
      }
    })
    expect(wrapper.findAll('.m-td').length).toBe(data.length)
  })

  test('列表 width', async () => {
    const columns: MParamLabel[] = [
      { param: 'id', label: 'id' },
      { param: 'name', label: '名称', props: { width: 100 } }
    ]
    const data = [
      { id: 1, name: '壹' },
      { id: 2, name: '贰' }
    ]
    const wrapper = mount({
      render() {
        return <MTablePlus data={data} columns={columns}/>
      }
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<div class=\\"m-table\\">
        <div class=\\"m-table-header-img-top\\"></div>
        <div class=\\"m-table-header-img-bottom\\"></div>
        <div class=\\"m-table-wrap\\">
          <table class=\\"m-table-inner\\">
            <thead class=\\"m-thead\\">
              <tr class=\\"m-tr\\">
                <th class=\\"m-th\\">id</th>
                <th class=\\"m-th\\" width=\\"100\\">名称</th>
              </tr>
            </thead>
            <tbody class=\\"m-tbody\\">
              <tr class=\\"m-tr\\">
                <td class=\\"m-td\\">1</td>
                <td class=\\"m-td\\">壹</td>
                <td class=\\"m-table-tbody-img\\"></td>
              </tr>
              <tr class=\\"m-tr\\">
                <td class=\\"m-td\\">2</td>
                <td class=\\"m-td\\">贰</td>
                <td class=\\"m-table-tbody-img\\"></td>
              </tr>
            </tbody>
          </table>
          <!---->
        </div>
        <div class=\\"m-table-border-img-bottom\\"></div>
      </div>"
    `);
  })


  test('列表 列customRender', async () => {
    const columns: MParamLabel[] = [
      { param: 'id', label: 'id' },
      { param: 'name', label: '名称', customRender: (value, row) => value + row.id }
    ]

    const data = [
      { id: 1, name: '壹' },
      { id: 2, name: '贰' }
    ]
    const wrapper = mount({
      render() {
        return <MTablePlus data={data} columns={columns}/>
      }
    })
    expect(wrapper.html()).toMatchInlineSnapshot(`
    "<div class=\\"m-table\\">
      <div class=\\"m-table-header-img-top\\"></div>
      <div class=\\"m-table-header-img-bottom\\"></div>
      <div class=\\"m-table-wrap\\">
        <table class=\\"m-table-inner\\">
          <thead class=\\"m-thead\\">
            <tr class=\\"m-tr\\">
              <th class=\\"m-th\\">id</th>
              <th class=\\"m-th\\">名称</th>
            </tr>
          </thead>
          <tbody class=\\"m-tbody\\">
            <tr class=\\"m-tr\\">
              <td class=\\"m-td\\">1</td>
              <td class=\\"m-td\\">壹1</td>
              <td class=\\"m-table-tbody-img\\"></td>
            </tr>
            <tr class=\\"m-tr\\">
              <td class=\\"m-td\\">2</td>
              <td class=\\"m-td\\">贰2</td>
              <td class=\\"m-table-tbody-img\\"></td>
            </tr>
          </tbody>
        </table>
        <!---->
      </div>
      <div class=\\"m-table-border-img-bottom\\"></div>
    </div>"
    `)
  })

  test('普通参数列表', async () => {
    const fn = vi.fn();
    const columns: MParamLabel[] = [
      { param: 'id', label: 'id' },
      { param: 'name', label: '名称' }
    ]

    const data = [
      { id: 1, name: '壹' },
      { id: 2, name: '贰' }
    ]
    const wrapper = mount({
      render() {
        return <MTablePlus data={data} columns={columns} pagination={{
          current: 1,
          total: 12,
          onChange: fn
        }}/>
      }
    })
    await wrapper.find('.m-page-next').trigger('click');
    expect(fn).toHaveBeenCalled()
  })


  describe('插槽', () => {
    test('列表 列slot', async () => {
      const columns: MParamLabel[] = [
        { param: 'id', label: 'id' },
        { param: 'name', label: '名称', isSlot: true }
      ]

      const data = [
        { id: 1, name: '壹' },
        { id: 2, name: '贰' }
      ]
      const wrapper = mount({
        render() {
          return <MTablePlus data={data} columns={columns}>
            {{
              name: ({ data, index }: any) => data.name + index
            }}
          </MTablePlus>
        }
      })
      expect(wrapper.html()).toMatchInlineSnapshot(`
    "<div class=\\"m-table\\">
      <div class=\\"m-table-header-img-top\\"></div>
      <div class=\\"m-table-header-img-bottom\\"></div>
      <div class=\\"m-table-wrap\\">
        <table class=\\"m-table-inner\\">
          <thead class=\\"m-thead\\">
            <tr class=\\"m-tr\\">
              <th class=\\"m-th\\">id</th>
              <th class=\\"m-th\\">名称</th>
            </tr>
          </thead>
          <tbody class=\\"m-tbody\\">
            <tr class=\\"m-tr\\">
              <td class=\\"m-td\\">1</td>
              <td class=\\"m-td\\">壹0</td>
              <td class=\\"m-table-tbody-img\\"></td>
            </tr>
            <tr class=\\"m-tr\\">
              <td class=\\"m-td\\">2</td>
              <td class=\\"m-td\\">贰1</td>
              <td class=\\"m-table-tbody-img\\"></td>
            </tr>
          </tbody>
        </table>
        <!---->
      </div>
      <div class=\\"m-table-border-img-bottom\\"></div>
    </div>"
    `)
    })

    test('默认插槽', async () => {
      type DataType = { id: number, name: string };

      const columns: MParamLabelArr<DataType> = [
        { param: 'id', label: 'id' },
        { param: 'name', label: '名称' }
      ]
      const data: DataType[] = [
        { id: 1, name: '壹' },
        { id: 2, name: '贰' }
      ]
      const wrapper = mount(MTablePlus, {
        components: { MTableColumn },
        props: { data, columns },
        slots: {
          default: () => [
            h(
              MTableColumn,
              { label: 'defaultSlot', param: '插槽' },
              {
                default: (data: { data: DataType }) => `${data.data.name}-${data.data.id}`
              }
            ),
          ]
        }
      })
      expect(wrapper.html()).toMatchInlineSnapshot(`
        "<div class=\\"m-table\\">
          <div class=\\"m-table-header-img-top\\"></div>
          <div class=\\"m-table-header-img-bottom\\"></div>
          <div class=\\"m-table-wrap\\">
            <table class=\\"m-table-inner\\">
              <thead class=\\"m-thead\\">
                <tr class=\\"m-tr\\">
                  <th class=\\"m-th\\">id</th>
                  <th class=\\"m-th\\">名称</th>
                  <th class=\\"m-th\\">defaultSlot</th>
                </tr>
              </thead>
              <tbody class=\\"m-tbody\\">
                <tr class=\\"m-tr\\">
                  <td class=\\"m-td\\">1</td>
                  <td class=\\"m-td\\">壹</td>
                  <td class=\\"m-td\\">壹-1</td>
                  <td class=\\"m-table-tbody-img\\"></td>
                </tr>
                <tr class=\\"m-tr\\">
                  <td class=\\"m-td\\">2</td>
                  <td class=\\"m-td\\">贰</td>
                  <td class=\\"m-td\\">贰-2</td>
                  <td class=\\"m-table-tbody-img\\"></td>
                </tr>
              </tbody>
            </table>
            <!---->
          </div>
          <div class=\\"m-table-border-img-bottom\\"></div>
        </div>"
      `);
    })
  });

})
