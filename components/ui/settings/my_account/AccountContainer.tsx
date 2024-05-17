"use client";
import {ProfileAccount} from '@/app/lib/types/profile';
import React from 'react'
import {useQueryClient} from '@tanstack/react-query';
import CustomTooltip from '@/app/components/shared/CustomTooltip';

const AccountContainer = ({accountData}: { accountData?: ProfileAccount }) => {

    const queryClient = useQueryClient();
    // const [previewImage, setPreviewImage] = useState<string | null>(accountData?.profile_image);
    // const [fileImage, setFileImage] = useState<File | null>(null);
    // const hiddenFileInput = useRef<HTMLInputElement>(null);
    // const [isEditAccount, setIsEditAccount] = useState(false)
    //
    // type requestType = Yup.InferType<typeof myAccountSchema>
    // const {
    //     resetField,
    //     setFocus,
    //     watch,
    //     trigger,
    //     getValues,
    //     setValue,
    //     setError,
    //     getFieldState,
    //     control,
    //     register,
    //     handleSubmit,
    //     formState: {
    //         errors,
    //         isValid,
    //         isDirty,
    //         isValidating
    //     }
    // } = useForm<requestType>({
    //     resolver: yupResolver(myAccountSchema),
    //     values: {
    //         fullname: '' || accountData?.name,
    //         employeeNo: '' || accountData?.employee_no,
    //         phonenumber: '' || accountData?.phone_number,
    //         email: '' || accountData?.email,
    //         userId: '' || accountData?.user_id,
    //
    //     }
    // });
    //
    // //handle click to upload image
    // const handleClickUploadImage = () => {
    //   hiddenFileInput?.current?.click();
    // };
    //
    // //handle upload image
    // const handleUploadImageChange = async (e: any) => {
    //   const file = e?.target?.files[0];
    //   setFileImage(file);
    //   setPreviewImage(URL.createObjectURL(e?.target?.files!![0]));
    // };
    //
    //
    // const updateProfileMutation = useMutation({
    //   mutationFn: (data: any) => profileService.updateUserProfile(data),
    //   onMutate: () => {
    //     toast.loading("Updating Profile...");
    //   },
    //   onSuccess: () => {
    //     toast.success('Update Profile successfully');
    //     queryClient.invalidateQueries(['profile'])
    //     queryClient.invalidateQueries(['company'])
    //     setIsEditAccount(!isEditAccount)
    //   },
    //   onError: (error: any) => {
    //     toast.error(error?.message || 'Update Profile failed');
    //   }
    // })

    //hanlde submit
    const onSubmit = async (data: any) => {
        //
        // // Initialize profile image url
        // let profileImage = null;
        //
        // // Upload image if fileImage is not null and update profile image url
        // if (fileImage != null) {
        //   try {
        //     const fileResponse = await profileService.uploadImage(
        //       fileImage
        //     );
        //     profileImage = fileResponse?.data?.data?.image_url;
        //   } catch (error) {
        //     toast.error("Fail to upload profile image");
        //     return;
        //   }
        // }
        //
        // const requestBody = {
        //   name: data?.fullname,
        //   employee_no: data?.employeeNo,
        //   profile_image: profileImage,
        //   phone_number: data?.phonenumber,
        //   email: data.email,
        // }
        // updateProfileMutation.mutate(requestBody)

    }


    return (
        <div className="ks-wt-modal-wrapper ks_d_flex ks_flex_col ks_flex_row_fluid">
            <form >
                <div className="ks-wt-modal-toolbar-container ks_d_flex ks_jt_cont_betw ks_alg_itm_ctr">
                    <label>My Account</label>
                    <div className="ks-wt-modal-toolbar-action-container">
                        {/*{isEditAccount &&*/}
                        <>
                            {/*<button className="ks_btn ks_btn_tiary" type='button' onClick={() => setIsEditAccount(!isEditAccount)}>*/}
                            {/*  Cancel*/}
                            {/*</button>*/}
                            <button
                                // disabled={updateProfileMutation.isLoading}
                                className="ks_btn ks_btn_icon_pm" type='submit'>
                                {/*{updateProfileMutation.isLoading ? "Saving..." : "Save"}*/}
                            </button>
                        </>
                        {/*}*/}
                        {/*{!isEditAccount &&*/}
                        {/*  (<button className="ks_btn ks_btn_outl_icon_tiary" type='button' onClick={() => setIsEditAccount(!isEditAccount)}>*/}
                        {/*    <svg viewBox="0 0 16 16">*/}
                        {/*      <path*/}
                        {/*        d="M13.4248 3.37354L12.458 2.40674L12.8071 2.06299C13.0435 1.82129 13.4141 1.78369 13.6289 1.99316L13.8008 2.15967C14.0479 2.396 14.0317 2.76123 13.7793 3.01367L13.4248 3.37354ZM7.11914 8.98096C6.95801 9.04004 6.77002 8.87354 6.83984 8.69629L7.32861 7.54688L12.0229 2.8418L12.9951 3.80859L8.29004 8.5083L7.11914 8.98096ZM4.95459 12.7568C3.72998 12.7568 3.05859 12.0908 3.05859 10.8716V4.75928C3.05859 3.54004 3.72998 2.87402 4.95459 2.87402H10.5459L9.16016 4.25977H5.11035C4.67529 4.25977 4.44434 4.47461 4.44434 4.93115V10.6997C4.44434 11.1616 4.67529 11.3711 5.11035 11.3711H10.981C11.3247 11.3711 11.5557 11.1616 11.5557 10.6997V6.69287L12.9414 5.30713V10.8716C12.9414 12.0908 12.27 12.7568 11.1313 12.7568H4.95459Z"*/}
                        {/*      />*/}
                        {/*    </svg>*/}
                        {/*    <label>Edit</label>*/}
                        {/*  </button>)*/}
                        {/*}*/}
                    </div>
                </div>
            </form>
            <div className="ks-wt-modal-sub-toolbar-container ks_d_flex ks_flex_col ks_scrollable">
                <div className="ks_d_flex ks_flex_col ks_gap_18rem">
                    <label>Personal Information</label>
                    <div className="ks-wt-form-input-container-wrapper ks_d_flex ks_flex_col">
                        <div className="ks-wt-table-header-title-block">
                            <label>Profile Image</label>
                            <CustomTooltip placement={"top"}
                                           title={"<ul class='ks-wt-tooltip-ul-element'><li>Ideal size : 180 x 180 pixels</li><li>Maximum size :  5MB</li><li>File type : JPG, PNG</li></ul>"}>
                                <svg viewBox="0 0 22 22">
                                    <path
                                        d="M5.71082 19.7338C3.82556 19.7338 2.84802 18.765 2.84802 16.8972V6.27515C2.84802 4.40735 3.82556 3.43854 5.71082 3.43854H16.2805C18.1657 3.43854 19.1432 4.40735 19.1432 6.27515V16.8972C19.1432 18.7562 18.1657 19.7338 16.2805 19.7338H5.71082ZM10.9651 8.58807C11.6546 8.58807 12.2045 8.02948 12.2045 7.33997C12.2045 6.633 11.6546 6.08313 10.9651 6.08313C10.2756 6.08313 9.71698 6.633 9.71698 7.33997C9.71698 8.02948 10.2756 8.58807 10.9651 8.58807ZM9.4115 16.6004H13.0947C13.5049 16.6004 13.8279 16.3036 13.8279 15.8847C13.8279 15.5007 13.5049 15.1865 13.0947 15.1865H12.091V10.901C12.091 10.3511 11.8117 9.99329 11.2968 9.99329H9.57733C9.16711 9.99329 8.85291 10.3075 8.85291 10.6915C8.85291 11.1105 9.16711 11.4072 9.57733 11.4072H10.4938V15.1865H9.4115C9.00128 15.1865 8.68707 15.5007 8.68707 15.8847C8.68707 16.3036 9.00128 16.6004 9.4115 16.6004Z"/>
                                </svg>
                            </CustomTooltip>
                        </div>

                        <div
                            className="ks-wt-form-image-container ks_d_flex ks_jt_cont_ctr ks_alg_itm_ctr cursor-pointer"
                            // onClick={handleClickUploadImage}
                        >
                           {/* {previewImage ?
                              <>
                                <Image src={previewImage} height={100} width={100} alt="" style={{ borderRadius: "0.4rem" }} />
                                <input accept={".png, .jpg, .jpeg"} type="file" className="ks_form_file_upload"
                                  hidden
                                  ref={hiddenFileInput}
                                  onChange={handleUploadImageChange} />
                              </>
                              :
                              <>
                                <div className="ks-wt-form-image-block ks_d_inl_flex ks_jt_cont_ctr ks_alg_itm_ctr">
                                  <input accept={".png, .jpg, .jpeg"} type="file" className="ks_form_file_upload"
                                    hidden
                                    ref={hiddenFileInput}
                                    onChange={handleUploadImageChange} />
                                  <svg viewBox="0 0 16 16">
                                    <path d="M2.52832 14.2378C1.89355 14.2378 1.41325 14.077 1.0874 13.7554C0.761556 13.438 0.598633 12.964 0.598633 12.3335V6.04297C0.598633 5.41243 0.761556 4.93636 1.0874 4.61475C1.41325 4.29313 1.89355 4.13232 2.52832 4.13232H4.15332C4.38607 4.13232 4.55745 4.10482 4.66748 4.0498C4.78174 3.99479 4.91081 3.89323 5.05469 3.74512L5.53076 3.21826C5.68311 3.05322 5.85026 2.92839 6.03223 2.84375C6.21419 2.75488 6.45752 2.71045 6.76221 2.71045H9.19336C9.50228 2.71045 9.74772 2.75488 9.92969 2.84375C10.1117 2.92839 10.2767 3.05322 10.4248 3.21826L10.9072 3.74512C11.0003 3.84245 11.085 3.92074 11.1611 3.97998C11.2415 4.03499 11.3283 4.0752 11.4214 4.10059C11.5187 4.12174 11.6478 4.13232 11.8086 4.13232H13.4653C14.1001 4.13232 14.5804 4.29313 14.9062 4.61475C15.2321 4.93636 15.395 5.41243 15.395 6.04297V12.3335C15.395 12.964 15.2321 13.438 14.9062 13.7554C14.5804 14.077 14.1001 14.2378 13.4653 14.2378H2.52832ZM8 12.416C8.60091 12.416 9.14681 12.27 9.6377 11.978C10.1328 11.686 10.5264 11.2946 10.8184 10.8037C11.1104 10.3086 11.2563 9.75846 11.2563 9.15332C11.2563 8.54395 11.1104 7.99382 10.8184 7.50293C10.5264 7.01204 10.1328 6.62061 9.6377 6.32861C9.14681 6.03239 8.60091 5.88428 8 5.88428C7.39909 5.88428 6.85107 6.03239 6.35596 6.32861C5.86084 6.62061 5.46729 7.01204 5.17529 7.50293C4.88753 7.99382 4.74365 8.54395 4.74365 9.15332C4.74365 9.75846 4.88753 10.3086 5.17529 10.8037C5.46729 11.2946 5.86084 11.686 6.35596 11.978C6.85107 12.27 7.39909 12.416 8 12.416ZM8 11.4194C7.58105 11.4194 7.2002 11.3179 6.85742 11.1147C6.51888 10.9116 6.24593 10.6387 6.03857 10.2959C5.83545 9.95312 5.73389 9.57227 5.73389 9.15332C5.73389 8.73014 5.83545 8.34717 6.03857 8.00439C6.2417 7.66162 6.51465 7.39079 6.85742 7.19189C7.2002 6.98877 7.58105 6.88721 8 6.88721C8.41895 6.88721 8.79769 6.98877 9.13623 7.19189C9.479 7.39079 9.75195 7.66162 9.95508 8.00439C10.1624 8.34717 10.2661 8.73014 10.2661 9.15332C10.2661 9.57227 10.1624 9.95312 9.95508 10.2959C9.75195 10.6387 9.479 10.9116 9.13623 11.1147C8.79769 11.3179 8.41895 11.4194 8 11.4194ZM11.6499 6.94434C11.6499 7.16439 11.7282 7.35059 11.8848 7.50293C12.0413 7.65527 12.2275 7.73145 12.4434 7.73145C12.6549 7.72721 12.8369 7.65104 12.9893 7.50293C13.1458 7.35059 13.2241 7.16439 13.2241 6.94434C13.2241 6.73275 13.1458 6.55078 12.9893 6.39844C12.8369 6.24186 12.6549 6.16357 12.4434 6.16357C12.2275 6.16357 12.0413 6.24186 11.8848 6.39844C11.7282 6.55078 11.6499 6.73275 11.6499 6.94434Z" />
                                  </svg>
                                </div>
                              </>
                            }*/}
                        </div>
                    </div>
                </div>
                <div className="ks-wt-modal-sub-toolbar-container-row">
                    <div className="ks_row">
                        <div className="col-7">
                            <div className="ks-wt-form-input-container-wrapper ks_d_flex ks_flex_col">
                                <label>
                                    Full Name <span>*</span>
                                </label>
                                <div className="ks-wt-form-input-container">
                                    <input
                                        type="text"
                                        className="ks_form_input ks_form_input_clear"
                                        placeholder="First and Last Name"
                                        maxLength={150}

                                    />
                                </div>
                                {/*{errors?.fullname?.message && <ErrorMsgIcon message={errors?.fullname?.message?.toString()!} />}*/}
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="ks-wt-form-input-container-wrapper ks_d_flex ks_flex_col">
                                <div className="ks-wt-table-header-title-block">
                                    <label>Employee No.</label>
                                    <CustomTooltip placement={"top"}
                                                   title={"If the company doesn’t have a HR system, we’ll automatically create Employee number for you"}>
                                        <svg viewBox="0 0 22 22">
                                            <path
                                                d="M5.71082 19.7338C3.82556 19.7338 2.84802 18.765 2.84802 16.8972V6.27515C2.84802 4.40735 3.82556 3.43854 5.71082 3.43854H16.2805C18.1657 3.43854 19.1432 4.40735 19.1432 6.27515V16.8972C19.1432 18.7562 18.1657 19.7338 16.2805 19.7338H5.71082ZM10.9651 8.58807C11.6546 8.58807 12.2045 8.02948 12.2045 7.33997C12.2045 6.633 11.6546 6.08313 10.9651 6.08313C10.2756 6.08313 9.71698 6.633 9.71698 7.33997C9.71698 8.02948 10.2756 8.58807 10.9651 8.58807ZM9.4115 16.6004H13.0947C13.5049 16.6004 13.8279 16.3036 13.8279 15.8847C13.8279 15.5007 13.5049 15.1865 13.0947 15.1865H12.091V10.901C12.091 10.3511 11.8117 9.99329 11.2968 9.99329H9.57733C9.16711 9.99329 8.85291 10.3075 8.85291 10.6915C8.85291 11.1105 9.16711 11.4072 9.57733 11.4072H10.4938V15.1865H9.4115C9.00128 15.1865 8.68707 15.5007 8.68707 15.8847C8.68707 16.3036 9.00128 16.6004 9.4115 16.6004Z"/>
                                        </svg>
                                    </CustomTooltip>
                                </div>
                                <div className="ks_row">
                                    <div className="col-9">
                                        <div className="ks-wt-form-input-container">
                                            <input
                                                type="text"
                                                className="ks_form_input ks_form_input_clear"
                                                placeholder="Enter Employee No"
                                                maxLength={150}


                                            />
                                        </div>
                                    </div>
                                    {/* <div className="col-4 ks_d_flex ks_alg_itm_ctr">
                      <div className="ks-wt-element-checkbox-lg-container ks_d_flex ks_alg_itm_ctr">
                        <div className="ks-wt-form-checkbox-block">
                          <input
                            id="ks_wt_automatic_checkbox_id"
                            type="checkbox"
                            className="ks_form_checkbox ks_form_checkbox_no_border"
                          />
                        </div>
                        <label htmlFor="ks_wt_automatic_checkbox_id">Automatic</label>
                      </div>
                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ks_row">
                        <div className="col-7">
                            <div className="ks_row">
                                <div className="col-6">
                                    <div className="ks-wt-form-input-container-wrapper ks_d_flex ks_flex_col">
                                        <label>
                                            Mobile Phone <span>*</span>
                                        </label>
                                        <div className="ks-wt-form-select-input-container ks_d_flex ks_alg_itm_ctr">
                                            <div className="ks_w35">
                                                <select className="ks_form_select ks_form_select_no_border">
                                                    <option>+84</option>
                                                </select>
                                            </div>
                                            <div className="ks_w75">
                                                <div className="ks-wt-form-input-container">
                                                    {/*<Controller*/}
                                                    {/*  name="phonenumber"*/}
                                                    {/*  control={control}*/}
                                                    {/*  render={({ field: { name, onChange } }) => (*/}
                                                    {/*    <PatternFormat*/}
                                                    {/*      name={name}*/}
                                                    {/*      defaultValue={accountData?.phone_number}*/}
                                                    {/*      placeholder={"Enter phone number"}*/}
                                                    {/*      className="ks_form_input ks_form_input_no_border ks_form_input_clear"*/}
                                                    {/*      format="### ### ####"*/}
                                                    {/*      allowEmptyFormatting={false}*/}
                                                    {/*      onValueChange={(values) => {*/}
                                                    {/*        const { value, formattedValue } = values;*/}
                                                    {/*        onChange(value);*/}
                                                    {/*        trigger('phonenumber')*/}
                                                    {/*      }}*/}
                                                    {/*    />*/}
                                                    {/*  )}*/}
                                                    {/*/>*/}

                                                </div>
                                            </div>
                                        </div>
                                        {/*{errors?.phonenumber?.message && <ErrorMsgIcon message={errors?.phonenumber?.message?.toString()!} />}*/}
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="ks-wt-form-input-container-wrapper ks_d_flex ks_flex_col">
                                        <div className="ks-wt-table-header-title-block">
                                            <label>
                                                Email <span>*</span>
                                            </label>
                                            <CustomTooltip placement={"top"} title={"Email to find ID and Password"}>
                                                <svg viewBox="0 0 22 22">
                                                    <path
                                                        d="M5.71082 19.7338C3.82556 19.7338 2.84802 18.765 2.84802 16.8972V6.27515C2.84802 4.40735 3.82556 3.43854 5.71082 3.43854H16.2805C18.1657 3.43854 19.1432 4.40735 19.1432 6.27515V16.8972C19.1432 18.7562 18.1657 19.7338 16.2805 19.7338H5.71082ZM10.9651 8.58807C11.6546 8.58807 12.2045 8.02948 12.2045 7.33997C12.2045 6.633 11.6546 6.08313 10.9651 6.08313C10.2756 6.08313 9.71698 6.633 9.71698 7.33997C9.71698 8.02948 10.2756 8.58807 10.9651 8.58807ZM9.4115 16.6004H13.0947C13.5049 16.6004 13.8279 16.3036 13.8279 15.8847C13.8279 15.5007 13.5049 15.1865 13.0947 15.1865H12.091V10.901C12.091 10.3511 11.8117 9.99329 11.2968 9.99329H9.57733C9.16711 9.99329 8.85291 10.3075 8.85291 10.6915C8.85291 11.1105 9.16711 11.4072 9.57733 11.4072H10.4938V15.1865H9.4115C9.00128 15.1865 8.68707 15.5007 8.68707 15.8847C8.68707 16.3036 9.00128 16.6004 9.4115 16.6004Z"/>
                                                </svg>
                                            </CustomTooltip>
                                        </div>
                                        <div className="ks-wt-form-input-container">
                                            <input
                                                type="email"
                                                className="ks_form_input ks_form_input_clear"
                                                placeholder="example@mail.com"
                                                maxLength={150}
                                                // onChange={(e) => { register("email").onChange(e); trigger('email') }}
                                                // disabled={!isEditAccount}
                                            />
                                        </div>
                                        {/*{errors?.email?.message && <ErrorMsgIcon message={errors?.email?.message?.toString()!} />}*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ks-wt-form-input-container-wrapper ks_d_flex ks_flex_col">
                                <label>ID</label>
                                <div className="ks-wt-form-input-container ks-wt-form-disabled">
                                    <input
                                        type="text"
                                        className="ks_form_input ks_form_input_clear"
                                        placeholder="example@mail.com"
                                        defaultValue="nurishin@webcashglobal.com"
                                        maxLength={150}

                                    />
                                    <div className="ks-wt-form-input-svg-container">
                                        <CustomTooltip placement={"top"} title={"clear input"}>
                                            <svg viewBox="0 0 22 22">
                                                <path
                                                    d="M7.34187 14.6584C7.39985 14.7191 7.46955 14.7675 7.54675 14.8005C7.62396 14.8336 7.70706 14.8506 7.79104 14.8506C7.87502 14.8506 7.95812 14.8336 8.03533 14.8005C8.11253 14.7675 8.18223 14.7191 8.24021 14.6584L11 11.8986L13.7805 14.6792C13.8378 14.7359 13.9067 14.7795 13.9824 14.8072C14.0582 14.8348 14.139 14.8458 14.2193 14.8393C14.3837 14.838 14.5411 14.7726 14.6581 14.6572C14.7188 14.5992 14.7672 14.5295 14.8002 14.4523C14.8333 14.3751 14.8503 14.292 14.8503 14.208C14.8503 14.124 14.8333 14.0409 14.8002 13.9637C14.7672 13.8865 14.7188 13.8168 14.6581 13.7588L11.8983 11.0003L14.6789 8.21973C14.7356 8.16243 14.7792 8.09357 14.8069 8.01784C14.8345 7.94211 14.8455 7.8613 14.839 7.78095C14.8377 7.61657 14.7723 7.45918 14.6569 7.34217C14.5989 7.28142 14.5292 7.23306 14.452 7.20002C14.3748 7.16698 14.2917 7.14995 14.2077 7.14995C14.1237 7.14995 14.0406 7.16698 13.9634 7.20002C13.8862 7.23306 13.8165 7.28142 13.7585 7.34217L11 10.102L8.21943 7.32139C8.16213 7.26469 8.09327 7.22102 8.01754 7.19339C7.94181 7.16576 7.861 7.1548 7.78065 7.16128C7.61627 7.1626 7.45888 7.22793 7.34187 7.3434C7.28112 7.40137 7.23276 7.47107 7.19972 7.54828C7.16668 7.62548 7.14965 7.70858 7.14965 7.79256C7.14965 7.87654 7.16668 7.95964 7.19972 8.03685C7.23276 8.11405 7.28112 8.18375 7.34187 8.24173L10.1017 11.0003L7.3211 13.7808C7.26439 13.8381 7.22072 13.907 7.19309 13.9827C7.16546 14.0585 7.1545 14.1393 7.16098 14.2196C7.16198 14.3838 7.22685 14.5412 7.34187 14.6584ZM11 19.5558C9.84122 19.5661 8.69214 19.3442 7.62054 18.9032C6.60459 18.4868 5.68159 17.8726 4.90523 17.0963C4.12886 16.3199 3.51465 15.3969 3.09832 14.381C2.65672 13.3091 2.43439 12.1595 2.44443 11.0003C2.43542 9.84837 2.65734 8.70633 3.0971 7.64162C3.51487 6.62641 4.12872 5.70355 4.90354 4.92584C5.70474 4.12911 6.65625 3.4995 7.70281 3.07357C8.74937 2.64765 9.87012 2.43389 11 2.44473C12.4137 2.45499 13.8032 2.81284 15.046 3.48675C16.2888 4.16065 17.3467 5.12992 18.1266 6.30913C18.9065 7.48833 19.3843 8.84126 19.5179 10.2487C19.6516 11.6561 19.437 13.0748 18.8931 14.3797C18.4684 15.3942 17.8508 16.3165 17.0744 17.0955C16.2968 17.8708 15.374 18.485 14.3587 18.9032C13.2939 19.3429 12.1519 19.5648 11 19.5558Z"/>
                                            </svg>
                                        </CustomTooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<ChangePasswordComponent*/}
                    {/*    // isEditAccount={isEditAccount}*/}
                    {/*    // setIsEditAccount={setIsEditAccount}*/}
                    {/*/>*/}
                </div>
            </div>
        </div>

    )
}

export default AccountContainer