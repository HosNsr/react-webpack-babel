import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Slider extends Component {
    render() {
        return (
            <section id="main-content">
                <section className="wrapper">
                    <div className="row">
                        <div className="col-lg-12">
                            <section className="panel">
                                <header className="panel-heading">
                                    اضافه کردن اسلایدر
                                </header>
                                <p className="dataTables_info color-green">فعال کردن این بخش <input type="checkbox"/></p>
                                <div className="dataTables_info">
                                    <p className="colorBlack">اضافه کردن اسلاید جدید <span className="label label-danger cursorpointer" data-toggle="modal" data-target="#mangeSlider">اضافه کردن</span></p>
                                </div>
                                <table className="table table-striped border-top" id="sample_1">
                                    <thead>
                                        <tr>
                                            <th>
                                                <input type="checkbox" className="group-checkable" data-set="#sample_1 .checkboxes" /></th>
                                            <th>نام اسلایدر</th>
                                            <th className="hidden-phone">توضیحات</th>
                                            <th className="hidden-phone">نام عکس</th>
                                            <th className="hidden-phone">ویرایش</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="odd gradeX">
                                            <td>
                                                <input type="checkbox" className="checkboxes" value="1" /></td>
                                            <td>اسلایدر چقد قشنگه مبارکش باد</td>
                                            <td className="hidden-phone">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها استفاده از طراحان گرافیک است. چاپگرها استفاده از طراحان گرافیک است. چاپگرها </td>
                                            <td className="center hidden-phone">pic1.jpg</td>
                                            <td className="hidden-phone"><span className="label label-success cursorpointer" data-toggle="modal" data-target="#mangeSlider">ویرایش</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                </section>
                <div className="modal fade" id="mangeSlider" role="dialog">
                    <div className="modal-dialog modal-lg modalwidth">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">تنظیمات اسلایدر</h4>
                            </div>
                            <div className="modal-body">
                                <div className="col-lg-12">
                                    <p className="colorBlack">نام اسلایدر : <input className="width70" type="text" /></p>
                                </div>
                                <div className="col-lg-12">
                                    <p className="colorBlack">توضیحات : <textarea className="width90"></textarea></p>
                                </div>
                                <div className="col-lg-12">
                                    <p className="colorBlack">آپلود عکس : <input type="file" /></p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">بستن</button>
                                <button type="button" className="btn btn-danger" data-dismiss="modal">ثبت</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}